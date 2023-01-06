/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import EntitySidebar from '../components/EntitySidebar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './css/Entities.css';

export default class Entities extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <Header />
        <div className="entities">
          <EntitySidebar selected="none" />
          <article>
            <span>Entities</span>
            <h1>Entity reference documentation</h1>
            <hr />
            <p>
              In this section, the documentation of this API&apos;s entities can be found.
              <br />
              <br />
              This documentation was created to assist in working with the existing entities. Knowing the properties of each entity, as well as the types of data they store, it is possible to use all avaiable features.
              <br />
              <br />
              Access to the entity is restricted according to its availability in Use Cases.
            </p>
            <hr />
            <div className="row">
              <button type="button" className="button-previous-entity" onClick={() => { history.push('/'); }}>
                {'<'}
                {' '}
                Home
              </button>
              <button type="button" className="button-next-entity" onClick={() => { history.push('/entities/orders'); }}>
                Orders
                {' '}
                {'>'}
              </button>
            </div>
          </article>
        </div>
        <Footer />
      </>
    );
  }
}

Entities.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
