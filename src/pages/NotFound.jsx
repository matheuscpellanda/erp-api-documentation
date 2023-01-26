import React, { Component } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './css/NotFound.css';
import * as animationData from '../assets/lotties/owls.json';

export default class NotFound extends Component {
  constructor(props) {
    super(props);
    this.player = React.createRef(); // initialize your ref
  }

  render() {
    return (
      <>
        <Header acao />
        <div className="not-found">
          <div className="lootie">
            <Player
              className="lottie-player"
              ref={this.player} // set the ref to your class instance
              autoplay
              loop
              controls
              keepLastFrame
              src={animationData}
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
