import React from 'react';
import PropTypes from 'prop-types';

import './CollectionPreview.scss';

import CollectionItem from '../CollectionItem';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview collection-preview_display">
      <h1 className="collection-preview__title collection-preview__title_size">
        {title.toUpperCase()}
      </h1>
      <div className="collection-preview__preview collection-preview__preview_display">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default CollectionPreview;
