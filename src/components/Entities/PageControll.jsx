import PropTypes from 'prop-types';
import React from 'react';
import { motion } from 'framer-motion';
import './css/PageControll.css';

function PageControll({ history, pageTitle, entities }) {
  const prevIndex = () => entities.map((e) => e.title).indexOf(pageTitle) - 1;
  const nextIndex = () => entities.map((e) => e.title).indexOf(pageTitle) + 1;

  const handlePreviousPage = () => {
    const prevPageIndex = prevIndex(pageTitle);
    history.push(entities[prevPageIndex].path);
  };

  const handleNextPage = () => {
    const nextPageIndex = nextIndex(pageTitle);
    history.push(entities[nextPageIndex].path);
  };

  const previousPageName = () => {
    const prevPageIndex = prevIndex(pageTitle);
    if (prevPageIndex < 0) {
      return undefined;
    }
    return entities[prevPageIndex].title;
  };

  const nextPageName = () => {
    const nextPageIndex = nextIndex(pageTitle);
    if (nextPageIndex >= entities.length) {
      return undefined;
    }
    return entities[nextPageIndex].title;
  };

  const pPageName = previousPageName(pageTitle);
  const nPageName = nextPageName(pageTitle);

  const btnPrevPageFeat = {
    className: 'button-previous-page',
    whileHover: () => ({
      scale: 1.05,
      rotate: [0, -15, -15, 0],
      transition: { duration: 0.3 },
      x: [0, -10, -10, 0],
    }),
    type: 'button',
    onClick: () => {
      setTimeout(() => {
        handlePreviousPage(pageTitle);
        window.scroll(0, 0);
      }, 100);
    },
  };

  const btnNextPageFeat = {
    className: 'button-next-page',
    whileHover: () => ({
      scale: 1.05,
      rotate: [0, 15, 15, 0],
      transition: { duration: 0.3 },
      x: [0, 10, 10, 0],
    }),
    type: 'button',
    onClick: () => {
      setTimeout(() => {
        handleNextPage(pageTitle);
        window.scroll(0, 0);
      }, 100);
    },
  };

  return (
    <div className="page-controll">
      <div className="button-row">
        {
          pPageName && (
            <motion.button
              {...btnPrevPageFeat}
            >
              {pPageName}
            </motion.button>
          )
        }
        {
          nPageName && (
            <motion.button
              {...btnNextPageFeat}
            >
              {nPageName}
            </motion.button>
          )
        }
      </div>
    </div>
  );
}

PageControll.propTypes = {
  entities: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  history: PropTypes.shape().isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default PageControll;
