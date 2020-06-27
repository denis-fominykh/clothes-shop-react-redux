import React from 'react';
import PropTypes from 'prop-types';

import './CollectionItem.scss';

const CollectionItem = ({ name, price, imageUrl }) => {
  return (
    <div className="collection-item collection-item_display">
      <div
        className="collection-item__image collection-item__image_size"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-item__footer collection-item__footer_display">
        <span className="collection-item__footer-name collection-item__footer-name_size">
          {name}
        </span>
        <span className="collection-item__footer-price collection-item__footer-price_size">
          {price}
        </span>
      </div>
    </div>
  );
};

CollectionItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CollectionItem;
