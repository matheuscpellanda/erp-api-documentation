import React, { Component } from 'react';
import Lottie from 'react-lottie';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './css/NotFound.css';
import * as animationData from '../assets/lotties/owls.json';

export default class NotFound extends Component {
  defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  render() {
    return (
      <>
        <Header />
        <div className="not-found">
          <div className="lootie">
            <Lottie
              options={this.defaultOptions}
              isStopped={false}
              isPaused={false}
            />
          </div>
          <h1>404</h1>
          <h2>Sorry, we could not find that page…</h2>
          <h3>But we brought backup!</h3>
        </div>
        <Footer />
      </>
    );
  }
}
