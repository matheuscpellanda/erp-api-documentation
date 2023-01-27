import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { motion } from 'framer-motion';
import './css/DocumentationBox.css';

export default class DocumentationBox extends Component {
  boxAnimation = {
    className: 'documentation-box',
    whileHover: () => {
      if (window.innerWidth) {
        return {
          scale: 1.1,
          background: 'var(--default-gradient)',
          color: 'rgb(255, 255, 255)',
          transition: { duration: 0.15 },
        };
      }
      return {};
    },
    onClick: () => {
      const { history, content: { path } } = this.props;
      this.setState({ clicked: true }, () => {
        setTimeout(() => {
          window.scroll(0, 0);
          history.push(path);
        }, 150);
      });
    },
    initial: { x: -200 },
    whileInView: () => {
      const { toOpen } = this.state;
      if (!toOpen) {
        this.setState({ toOpen: true });
      }
    },
    animate: () => {
      const { toOpen, clicked } = this.state;
      if (clicked) {
        return {
          scale: 1.2,
          background: 'var(--default-gradient)',
          color: 'rgb(255, 255, 255)',
          x: 0,
          transition: { duration: 0.15 },
        };
      }
      if (toOpen) {
        return {
          x: [-200, 0],
          transition: { duration: 0.7 },
        };
      }
      return {};
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      toOpen: false,
      clicked: false,
    };
  }

  render() {
    const { content: { name, description } } = this.props;
    return (
      <motion.div {...this.boxAnimation}>
        <h1 className="box-title">{name}</h1>
        <h2 className="box-subtitle">{description}</h2>
        <hr className="doc-separator" />
        <p>Click to see more details</p>
      </motion.div>
    );
  }
}

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
