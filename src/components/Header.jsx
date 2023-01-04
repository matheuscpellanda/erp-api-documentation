import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="row gap">
          <Link to="/erp-api-documentation/entities" className="header-secondary">Entities</Link>
          <Link to="/*" className="header-secondary">Use Cases</Link>
          <Link to="/*" className="header-secondary">Providers</Link>
          <Link to="/*" className="header-secondary">Repositories</Link>
          <Link to="/*" className="header-secondary">Services</Link>
          <Link to="/erp-api-documentation/" className="header-primary">Home</Link>
          <Link to="/erp-api-documentation/docs" className="header-primary">Docs</Link>
        </div>
      </header>
    );
  }
}
