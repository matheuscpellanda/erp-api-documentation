import React from 'react';
import logo from '../logo.svg';
import './css/Footer.css';

function Footer() {
  return (
    <footer>
      <span>© Copyright 2023. All rights reserved.</span>
      <div className="row">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </footer>
  );
}

export default Footer;
