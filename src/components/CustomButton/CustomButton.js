import React from 'react';
import PropTypes from 'prop-types';

import './CustomButton.scss';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button custom-button_style" {...otherProps}>
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  otherProps: PropTypes.array,
};

export default CustomButton;
