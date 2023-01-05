import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark as styleHighlighter } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './css/CodeBox.css';

export default class CodeBox extends Component {
  render() {
    const { data } = this.props;
    return (
      <SyntaxHighlighter className="codebox" language="json" style={styleHighlighter}>
        {JSON.stringify(data, null, 3)}
      </SyntaxHighlighter>
    );
  }
}

CodeBox.propTypes = {
  data: PropTypes.shape().isRequired,
};
