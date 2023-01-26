import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { motion } from 'framer-motion';
import './css/DocumentationBox.css';

export default class DocumentationBox extends Component {
  boxAnimation = {
    whileHover: {
      scale: 1.2,
      background: 'var(--default-gradient)',
      color: 'rgb(255, 255, 255)',
    },
    className: 'documentation-box',
  };

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
};
