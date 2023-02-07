import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import owlImg from '../images/ntf1.png';
import './css/NotFound.css';

export default class NotFound extends Component {
  render() {
    return (
      <>
        <Header acao />
        <div className="not-found">
          <img src={owlImg} alt="Angry Owl" className="not-found-img" />
          <div className="not-found-texts">
            <h1 className="not-found-hero-title-01">404</h1>
            <h2 className="not-found-hero-title-02">Sorry, we could not find that page…</h2>
          </div>
        </div>
        <Footer color="#f1f1f0" />
      </>
    );
  }
}
