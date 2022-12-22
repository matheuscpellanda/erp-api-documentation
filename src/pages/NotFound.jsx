import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './css/NotFound.css';

export default class NotFound extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="not-found">
          <h2>Sorry, we could not find that page…</h2>
          <h1>404</h1>
        </div>
        <Footer />
      </>
    );
  }
}
