import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './css/DocumentationCategory.css';
import DocumentationBox from './DocumentationBox';

export default class DocumentationCategory extends Component {
  render() {
    const { data, history } = this.props;
    return (
      <div className="documentation-category">
        <h1 className="documentation-category-title">{data.title}</h1>
        <div className="documentation-category-row">
          {
            data.content.map((content) => (
              <DocumentationBox
                key={content.name}
                content={content}
                history={history}
              />
            ))
          }
        </div>
        <hr className="doc-separator" />
      </div>
    );
  }
}

DocumentationCategory.propTypes = {
  history: PropTypes.shape().isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape().isRequired,
    ).isRequired,
  }).isRequired,
};
