import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

export default class Header extends Component {
  render() {
    const { acao: ativaCor } = this.props;
    return (
      <header className={ativaCor ? 'main-header active' : 'main-header'}>
        <Link to="/entities" className={ativaCor ? 'header-secondary active' : 'header-secondary'}>Entities</Link>
        <Link to="/services" className={ativaCor ? 'header-secondary active' : 'header-secondary'}>Services</Link>
        <Link to="/" className={ativaCor ? 'header-primary active' : 'header-primary'}>Home</Link>
        <Link to="/docs" className={ativaCor ? 'header-primary active' : 'header-primary'}>Docs</Link>
      </header>
    );
  }
}

Header.propTypes = {
  acao: PropTypes.bool.isRequired,
};
