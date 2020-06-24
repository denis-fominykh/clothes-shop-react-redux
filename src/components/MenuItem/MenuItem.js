import React from 'react';
import PropTypes from 'prop-types';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, imageSize }) => {
  return (
    <div className={`menu-item ${imageSize}`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageSize: PropTypes.string.isRequired,
};

export default MenuItem;
