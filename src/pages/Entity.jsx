import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import EntitySidebar from '../components/EntitySidebar';
import './css/Entities.css';
import entitiesVariables from '../assets/variables/entities.json';
import Footer from '../components/Footer';
import EntityCard from '../components/EntityCard';

export default class Entity extends Component {
  DEFAULT_ROUTE = {};

  getPageIndex = (path) => {
    const index = Object.values(this.DEFAULT_ROUTE).indexOf(path);
    return index;
  };

  buildTitle = (pageIndex) => {
    const name = Object.keys(this.DEFAULT_ROUTE)[pageIndex];
    let newName = name;
    if (name) {
      newName = name[0].toUpperCase();
      newName += name.slice(1);
    }
    return newName;
  };

  updateEntitiesNames = () => {
    for (const route of Object.keys(this.DEFAULT_ROUTE)) {
      delete this.DEFAULT_ROUTE[route];
    }
    this.DEFAULT_ROUTE.entities = '/doc-reference-api/entities/';
    const variables = Object.keys(entitiesVariables);
    variables.forEach((variable) => {
      this.DEFAULT_ROUTE[variable] = `/doc-reference-api/entities/${variable}`;
    });
  };

  handlePageChange = (param) => {
    const { history, history: { location: { pathname } } } = this.props;
    const pageIndex = this.getPageIndex(pathname);
    let newIndex = 0;
    switch (param) {
      case 'next':
        newIndex = pageIndex + 1;
        break;
      case 'prev':
        newIndex = pageIndex - 1;
        break;
      default:
        break;
    }
    const newPagePath = Object.values(this.DEFAULT_ROUTE)[newIndex];
    history.push(newPagePath);
    window.scroll(0, 0);
  };

  render() {
    const { match: { params: { entity } }, history: { location: { pathname } } } = this.props;
    this.updateEntitiesNames();
    const pageIndex = this.getPageIndex(pathname);
    const pageTitle = this.buildTitle(pageIndex);
    const prevPageTitle = this.buildTitle(pageIndex - 1);
    const nextPageTitle = this.buildTitle(pageIndex + 1);
    return (
      <>
        <Header />
        <div className="entities">
          <EntitySidebar selected={entity} />
          <article>
            <span>
              Entities
              {' '}
              {'>'}
              {' '}
              { pageTitle }
            </span>
            <h1>{ pageTitle }</h1>
            <hr />
            <div className="row">
              <section className="entities-variables">
                {
                entitiesVariables[entity].map(
                  (variable) => <EntityCard key={variable.name} data={variable} />,
                )
              }
              </section>
            </div>
            <hr />
            <div className="row">
              <button type="button" className="button-previous-entity" onClick={() => this.handlePageChange('prev')}>{`< ${prevPageTitle}`}</button>
              {
                nextPageTitle ? (
                  <button
                    type="button"
                    className="button-next-entity"
                    onClick={() => this.handlePageChange('next')}
                  >
                    {`${nextPageTitle} >`}
                  </button>
                )
                  : null
              }
            </div>
          </article>
        </div>
        <Footer />
      </>
    );
  }
}

Entity.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      entity: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
