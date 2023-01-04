import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/EntitySidebar.css';
import entitiesVariables from '../assets/variables/entities.json';

const buildTitle = (name) => {
  let newName = name;
  if (name) {
    newName = name[0].toUpperCase();
    newName += name.slice(1);
  }
  return newName;
};

export default class EntitySidebar extends Component {
  DEFAULT_ROUTE = [];

  updateEntitiesNames = () => {
    this.DEFAULT_ROUTE.length = 0;
    const variables = Object.keys(entitiesVariables);
    variables.forEach((variable) => {
      this.DEFAULT_ROUTE.push(buildTitle(variable));
    });
  };

  render() {
    const { selected } = this.props;
    this.updateEntitiesNames();
    const entities = [...this.DEFAULT_ROUTE];
    return (
      <div className="entity-sidebar">
        {
          entities.map((entity) => (
            <Link
              key={entity}
              className={selected === entity.toLowerCase() ? 'link-sidebar selected' : 'link-sidebar'}
              to={`/doc-reference-api/entities/${entity.toLowerCase()}`}
            >
              { entity }
            </Link>
          ))
        }
      </div>
    );
  }
}

EntitySidebar.propTypes = {
  selected: PropTypes.string.isRequired,
};
