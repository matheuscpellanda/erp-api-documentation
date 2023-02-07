import PropTypes from 'prop-types';
import React, { Component } from 'react';

class OpenMenu extends Component {
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
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    );
  }
}

OpenMenu.defaultProps = {
  color: 'black',
};

OpenMenu.propTypes = {
  color: PropTypes.string,
};

export default OpenMenu;
