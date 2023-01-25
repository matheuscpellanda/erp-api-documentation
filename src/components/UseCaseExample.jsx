import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { motion } from 'framer-motion';
import './css/UseCaseExample.css';
import CodeBox from './CodeBox';

export default class UseCaseExample extends Component {
  animationTitles = {
    className: 'use-case-title',
    whileInView: () => {
      const { firstOpen } = this.state;
      if (!firstOpen) {
        this.setState({
          firstOpen: true,
        });
      }
    },
    transition: { type: 'tween', duration: 2 },
    initial: { x: -250 },
    animate: () => {
      const { firstOpen } = this.state;
      let resp = {};
      if (firstOpen) {
        resp = { x: [-250, 0] };
      }
      return resp;
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      firstOpen: undefined,
    };
  }

  render() {
    const {
      data, showResponse, image, title,
    } = this.props;
    return (
      <motion.div
        {...{ ...this.animationTitles, className: 'use-case-example' }}
      >
        <motion.h2
          {...this.animationTitles}
        >
          {`Example of ${title}`}
        </motion.h2>
        <div className="use-case-main">
          <img className="use-case-image" src={image} alt="Exemplo código 03" />
          <div className="use-case-responses">
            <div className="use-case-response-header">
              <h1 className="use-case-response-title">Response Example</h1>
              <motion.button whileHover={{ scale: 1.1 }} onClick={showResponse}>200</motion.button>
              <motion.button whileHover={{ scale: 1.1 }} onClick={showResponse}>400</motion.button>
              <motion.button whileHover={{ scale: 1.1 }} onClick={showResponse}>401</motion.button>
              <motion.button whileHover={{ scale: 1.1 }} onClick={showResponse}>405</motion.button>
            </div>
            <CodeBox
              data={data}
            />
          </div>
        </div>
      </motion.div>
    );
  }
}

UseCaseExample.propTypes = {
  data: PropTypes.shape().isRequired,
  showResponse: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
