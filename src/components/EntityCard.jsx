import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './css/EntityCard.css';

export default class EntityCard extends Component {
  render() {
    const {
      data,
      data: { values, properties, objects_properties: objectsProperties },
    } = this.props;
    return (
      <div className="entity-card">
        <div className="entity-header">
          <div className="entity-name">
            <h1>
              { data.name }
              :
            </h1>
          </div>
          <div className="entity-type">{ `<${data.type}>` }</div>
        </div>
        {
          values
            ? (
              <div className="row">
                <br />
                <div className="entity-name"><h2>Values:</h2></div>
                <div className="entity-secondary">
                  <div key="values" className="entity-values">
                    { JSON.stringify(values).replaceAll(',', ', ').replaceAll('[', '[ ').replaceAll(']', ' ]')
                      .replaceAll('"', '\'') }
                  </div>
                </div>
              </div>
            )
            : null
        }
        {
          properties
            ? (
              <div className="row">
                <br />
                <div className="entity-name"><h2>Properties:</h2></div>
                <div className="entity-secondary">
                  <p className="json-open-object">{'{'}</p>
                  {
                  properties.map((property) => (
                    <div key={property.name} className="entity-properties">
                      <p className="json-key-object">
                        { property.name }
                        :
                      </p>
                      <p className="json-value-object">
                        { `<${property.type}>` }
                        {' '}
                        { property.values ? `${JSON.stringify(property.values).replaceAll(',', ', ').replaceAll('"', '\'')}` : null }
                        {' '}
                        ,
                      </p>
                    </div>
                  ))
                }
                  <p className="json-open-object">{'}'}</p>
                </div>
              </div>
            )
            : null
        }
        {
          objectsProperties
            ? (
              <div className="row">
                <br />
                <div className="entity-name"><h2>Objects Properties:</h2></div>
                <div className="entity-secondary">
                  <p className="json-open-object">{'{'}</p>
                  {
                  objectsProperties.map((property) => (
                    <div key={property.name} className="entity-properties">
                      <p className="json-key-object">
                        { property.name }
                        :
                      </p>
                      <p className="json-value-object">
                        { `<${property.type}>` }
                        {' '}
                        { property.values ? `${JSON.stringify(property.values).replaceAll(',', ', ').replaceAll('"', '\'')}` : null }
                        {' '}
                        ,
                      </p>
                    </div>
                  ))
                }
                  <p className="json-open-object">{'}'}</p>
                </div>
              </div>
            )
            : null
        }
      </div>
    );
  }
}

EntityCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    properties: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string.isRequired,
    objects_properties: PropTypes.arrayOf(PropTypes.string),
    values: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
