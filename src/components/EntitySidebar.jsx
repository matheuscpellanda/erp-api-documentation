import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/EntitySidebar.css'
import entitiesVariables from '../assets/variables/entities.json';

export default class EntitySidebar extends Component {
  DEFAULT_ROUTE = [];

  buildTitle = (name) => {
    let newName = name;
    if (name) {
      newName = name[0].toUpperCase();
      newName = newName + name.slice(1);
    }
    return newName;
  };

  updateEntitiesNames = () => {
    this.DEFAULT_ROUTE.length = 0;
    const variables = Object.keys(entitiesVariables);
    variables.forEach((variable) => {
      this.DEFAULT_ROUTE.push(this.buildTitle(variable));
    });
  }

  render() {
    const { selected } = this.props;
    this.updateEntitiesNames();
    const entities = [...this.DEFAULT_ROUTE];
    return (
      <div className='entity-sidebar'>
        {
          entities.map((entity) => (
            <Link
            key={ entity }
            className={ selected === entity.toLowerCase() ? 'link-sidebar selected' : 'link-sidebar' }
            to={ `/entities/${entity.toLowerCase()}` }>
              { entity }
            </Link>
          ))
        }
    </div>
    )
  }
}
