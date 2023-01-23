import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './css/UseCaseExample.css';
import CodeBox from './CodeBox';

export default class UseCaseExample extends Component {
  render() {
    const {
      data, showResponse, image, title,
    } = this.props;
    return (
      <div className="use-case-example">
        <h2 className="use-case-title">{`Example of ${title} Creation`}</h2>
        <div className="use-case-main">
          <img className="use-case-image" src={image} alt="Exemplo código 03" />
          <div className="use-case-responses">
            <div className="use-case-response-header">
              Response Example
              <button type="button" onClick={showResponse}>200</button>
              <button type="button" onClick={showResponse}>400</button>
              <button type="button" onClick={showResponse}>401</button>
              <button type="button" onClick={showResponse}>405</button>
            </div>
            <CodeBox
              data={data}
            />
          </div>
        </div>
      </div>
    );
  }
}

UseCaseExample.propTypes = {
  data: PropTypes.shape().isRequired,
  showResponse: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
