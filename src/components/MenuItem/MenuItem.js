import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, imageSize, linkUrl, history, match }) => {
  return (
    <div
      className={`menu-item menu-item_style ${imageSize}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="menu-item__background-image menu-item__background-image_size"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="menu-item__content menu-item__content_style">
        <h1 className="menu-item__content-title menu-item__content-title_font">
          {title}
        </h1>
        <span className="menu-item__content-subtitle menu-item__content-subtitle_font">
          SHOP NOW
        </span>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageSize: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withRouter(MenuItem);
