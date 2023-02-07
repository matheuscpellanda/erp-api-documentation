import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CloseMenu extends Component {
  render() {
    const { color } = this.props;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill={color}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    );
  }
}

CloseMenu.defaultProps = {
  color: 'black',
};

CloseMenu.propTypes = {
  color: PropTypes.string,
};

export default CloseMenu;
