import React, { Component } from 'react';
import './css/Subscribe.css';

export default class Subscribe extends Component {
  render() {
    return (
      <div className="subscribe">
        <h1>Subscribe to receive newsletters</h1>
        <div className="subscribe-info">
          <input type="email" name="email" id="email-subscribe" placeholder="Enter your email" />
          <button type="button">Subscribe</button>
        </div>
      </div>
    );
  }
}
