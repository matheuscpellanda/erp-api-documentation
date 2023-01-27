import PropTypes from 'prop-types';
import React from 'react';
import './css/DocumentationCategory.css';
import DocumentationBox from './DocumentationBox';

function DocumentationCategory({ data, history }) {
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

export default DocumentationCategory;

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
