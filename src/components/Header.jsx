import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ButtonActivateHeader from './ButtonActivateHeader';
import './css/Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuState: 'closed',
    };
  }

  openMenu = () => {
    const menu = document.getElementsByClassName('menu')[0];
    const mainMenu = document.getElementsByClassName('main-header')[0];
    this.setState({
      menuState: 'opened',
    });
    menu.style.left = '0';
    menu.style.width = '100vw';
    menu.style.height = '100vh';
    menu.style['justify-content'] = 'flex-end';
    mainMenu.style.display = 'flex';
  };

  closeMenu = () => {
    const menu = document.getElementsByClassName('menu')[0];
    const mainMenu = document.getElementsByClassName('main-header')[0];
    this.setState({
      menuState: 'closed',
    });
    menu.style.left = 'calc(100vw - 80px)';
    menu.style.width = 'calc(47vw + 80px)';
    setTimeout(() => {
      menu.style.height = '80px';
      menu.style['justify-content'] = 'flex-start';
      mainMenu.style.display = 'none';
    }, 500);
  };

  render() {
    const { acao: ativaCor } = this.props;
    const { menuState } = this.state;
    return (
      <div
        className="menu"
        onPointerDown={({ target }) => {
          if (target.className.includes('menu')) {
            this.closeMenu();
          }
        }}
      >
        <ButtonActivateHeader
          onClick={menuState === 'opened' ? this.closeMenu : this.openMenu}
          menu-state={menuState}
        />
        <header
          className={ativaCor ? 'main-header active' : 'main-header'}
          onPointerMove={() => {}}
        >
          <motion.div className="header-motion" whileHover={{ scale: 1.1 }}>
            <Link to="/entities" className={ativaCor ? 'header-secondary active' : 'header-secondary'}>Entities</Link>
          </motion.div>
          <motion.div className="header-motion" whileHover={{ scale: 1.1 }}>
            <Link to="/services" className={ativaCor ? 'header-secondary active' : 'header-secondary'}>Services</Link>
          </motion.div>
          <motion.div className="header-motion" whileHover={{ scale: 1.1 }}>
            <Link to="/" className={ativaCor ? 'header-primary active' : 'header-primary'}>Home</Link>
          </motion.div>
          <motion.div className="header-motion" whileHover={{ scale: 1.1 }}>
            <Link to="/docs" className={ativaCor ? 'header-primary active' : 'header-primary'}>Docs</Link>
          </motion.div>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  acao: PropTypes.bool.isRequired,
};
