import PropTypes from 'prop-types';
import React, { Component } from 'react';
import menuIconOpen from '../images/menu_black_24dp.svg';
import menuIconClose from '../images/close_black_24dp.svg';
import './css/ButtonActivateHeader.css';

export default class ButtonActivateHeader extends Component {
  render() {
    const { onClick, 'menu-state': menuState } = this.props;
    return (
      <button type="button" id="menu-button" onClick={onClick}>
        <img id="menu-image" src={menuState === 'closed' ? menuIconOpen : menuIconClose} alt="Menu Icon" />
      </button>
    );
  }
}

ButtonActivateHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
  'menu-state': PropTypes.string.isRequired,
};
