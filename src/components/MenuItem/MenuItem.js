import React from 'react';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, imageSize }) => {
  return (
    <div
      className={`menu-item ${imageSize}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
