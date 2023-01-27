import PropTypes from 'prop-types';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark as styleHighlighter } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './css/CodeBox.css';

function CodeBox({ data }) {
  return (
    <SyntaxHighlighter className="codebox" language="json" style={styleHighlighter}>
      {JSON.stringify(data, null, 3)}
    </SyntaxHighlighter>
  );
}

export default CodeBox;

CodeBox.propTypes = {
  data: PropTypes.shape().isRequired,
};
