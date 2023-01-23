import React, { Component } from 'react';
import logo from '../logo.svg';
import './css/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <span>© Copyright 2023. All rights reserved.</span>
        <div className="row">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </footer>
    );
  }
}
