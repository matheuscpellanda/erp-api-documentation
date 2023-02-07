/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';
// import EntitySidebar from '../components/EntitySidebar';
import { Header, Footer } from '../components';
import entities from '../assets/variables/entities.json';
import './css/Entities.css';
import PageControll from '../components/Entities/PageControll';
import EntityCard from '../components/Entities/EntityCard';

function Entities({ history, history: { location: { pathname } } }) {
  const pageObj = entities.find((e) => e.path === pathname);

  return (
    <>
      <Header acao />
      <div className="entities">
        <span className="label">
          Entities
          {
            pageObj.title !== 'Entity' ? ` > ${pageObj.title}` : ''
          }
        </span>
        <h1 className="entities-title">{pageObj.title}</h1>
        {
          pageObj.subtitle && <h2 className="entities-subtitle">{pageObj.subtitle}</h2>
        }
        <PageControll pageTitle={pageObj.title} entities={entities} history={history} />
        {
          pageObj.text && pageObj.text.map((text, index) => (
            <p key={index}>{text}</p>
          ))
        }
        <div className="entities-content">
          {
            pageObj.content.map((card) => <EntityCard key={card.name} data={card} />)
          }
        </div>
        <PageControll pageTitle={pageObj.title} entities={entities} history={history} />
      </div>
      <Footer />
    </>
  );
}

export default Entities;

Entities.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    location: PropTypes.shape().isRequired,
  }).isRequired,
};
