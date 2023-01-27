import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './css/DocumentationBox.css';

function DocumentationBox({ content: { name, description, path }, history }) {
  const [toShow, setShow] = useState(false);
  const [showed, setShowed] = useState(false);
  const [clicked, setClicked] = useState(false);

  const boxAnimation = {
    className: 'documentation-box',
    initial: { x: -300 },
    whileHover: () => {
      if (window.innerWidth >= 781 && !clicked) {
        return {
          scale: 1.1,
          background: 'var(--default-gradient)',
          color: 'rgb(255, 255, 255)',
          transition: { duration: 0.15 },
        };
      }
      return {};
    },
    whileInView: () => {
      if (!toShow) {
        setShow(true);
        setTimeout(() => {
          setShowed(true);
        }, 700);
      }
    },
    onClick: async () => {
      setClicked(true);
      setTimeout(() => {
        window.scroll(0, 0);
        history.push(path);
      }, 150);
    },
    animate: () => {
      if (clicked) {
        return {
          scale: 1.3,
          background: 'var(--default-gradient)',
          color: 'rgb(255, 255, 255)',
          x: 0,
          transition: { duration: 0.15 },
        };
      }
      if (showed) {
        return {
          scale: 1,
          x: 0,
          transition: { duration: 0.15 },
        };
      }
      if (toShow) {
        return {
          scale: 1,
          x: [-300, 0],
          transition: { duration: 0.7 },
        };
      }
      return {};
    },
  };

  return (
    <motion.div {...boxAnimation}>
      <h1 className="box-title">{name}</h1>
      <h2 className="box-subtitle">{description}</h2>
      <hr className="doc-separator" />
      <p>Click to see more details</p>
    </motion.div>
  );
}

export default DocumentationBox;

DocumentationBox.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
