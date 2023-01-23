import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="row gap">
          <Link to="/entities" className="header-secondary">Entities</Link>
          <Link to="/services" className="header-secondary">Services</Link>
          <Link to="/" className="header-home">Home</Link>
          <Link to="/docs" className="header-docs">Docs</Link>
        </div>
      </header>
    );
  }
}
