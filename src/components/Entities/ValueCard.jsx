import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ValueCard extends Component {
  render() {
    const { data: values } = this.props;
    return (
      <div className="column">
        <div className="entity-name"><h2>Values:</h2></div>
        <div className="entity-secondary">
          <div key="values" className="entity-values">
            { JSON.stringify(values).replaceAll(',', ', ').replaceAll('[', '[ ').replaceAll(']', ' ]')
              .replaceAll('"', '\'') }
          </div>
        </div>
      </div>
    );
  }
}

ValueCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default ValueCard;
