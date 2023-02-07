import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { motion } from 'framer-motion';
import ExpandMore from '../Icons/ExpandMore';
import './css/PropertyCard.css';

const divAnimate = (isShown) => ({
  className: isShown ? 'entity-properties-value show' : 'entity-properties-value',
  initial: { height: 0 },
  animate: {
    padding: isShown ? '10px' : '0',
    height: isShown ? 'auto' : 0,
    transition: { duration: 0.7 },
  },
});

class ObjectPropCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };
  }

  handleShow = () => {
    this.setState((prevState) => ({
      isShown: !prevState.isShown,
    }));
  };

  render() {
    const { isShown } = this.state;
    const { data: property } = this.props;
    return (
      <div>
        <div className="entity-properties">
          <p className="json-key-object">
            { property.name }
            :
          </p>
          <p className="json-value-object">
            { `<${property.type}>,` }
          </p>
          {
            property.values && (
              <button
                type="button"
                className={isShown ? 'button-expand-more rotate' : 'button-expand-more'}
                onClick={this.handleShow}
              >
                <ExpandMore />
              </button>
            )
          }
        </div>
        {
          property.values && (
            <motion.div {...divAnimate(isShown)}>
              { property.values ? `${JSON.stringify(property.values).replaceAll(',', ', ').replaceAll('"', '\'')}` : null }
            </motion.div>
          )
        }
      </div>
    );
  }
}

ObjectPropCard.propTypes = {
  data: PropTypes.shape({
  }),
}.isRequired;

export default ObjectPropCard;
