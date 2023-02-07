import PropTypes from 'prop-types';
import React from 'react';
import './css/ButtonActivateHeader.css';
import CloseMenu from './Icons/CloseMenu';
import OpenMenu from './Icons/OpenMenu';

function ButtonActivateHeader({ onClick, 'menu-state': menuState }) {
  return (
    <button type="button" id="menu-button" onClick={onClick}>
      {menuState === 'closed' ? <OpenMenu /> : <CloseMenu />}
    </button>
  );
}

/* <img id="menu-image" src={menuState === 'closed' ?
// menuIconOpen : <CloseMenu />} alt="Menu Icon" /> */

export default ButtonActivateHeader;

ButtonActivateHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
  'menu-state': PropTypes.string.isRequired,
};
