import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './css/EntityCard.css';
import ObjectPropCard from './ObjectPropCard';
import PropertyCard from './PropertyCard';
import ValueCard from './ValueCard';

export default class EntityCard extends Component {
  render() {
    const {
      data,
      data: {
        values,
        properties,
        objects_properties: objectsProperties,
      },
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
          values && <ValueCard data={values} />
        }
        {
          properties && (
            <div className="column">
              <div className="entity-name"><h2>Properties:</h2></div>
              <div className="entity-secondary">
                <div key="properties" className="entity-values">
                  <p className="json-open-object">{'{'}</p>
                  {
                    properties.map(
                      (property) => (<PropertyCard key={property.name} data={property} />),
                    )
                  }
                  <p className="json-open-object">{'}'}</p>
                </div>
              </div>
            </div>

          )
        }
        {
          objectsProperties
            && (
              <div className="column">
                <div className="entity-name"><h2>Objects Properties:</h2></div>
                <div className="entity-secondary">
                  <div key="values" className="entity-values">
                    <p className="json-open-object">{'{'}</p>
                    {
                      objectsProperties.map(
                        (property) => (<ObjectPropCard key={property.name} data={property} />),
                      )
                    }
                    <p className="json-open-object">{'}'}</p>
                  </div>
                </div>
              </div>
            )
        }
      </div>
    );
  }
}

EntityCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    properties: PropTypes.arrayOf(PropTypes.shape()),
    type: PropTypes.string.isRequired,
    objects_properties: PropTypes.arrayOf(PropTypes.shape()),
    values: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
