import React from 'react';
import PropTypes from 'prop-types';

import './FormInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group group_position">
      <input
        className="group__form-input group__form-input_style"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`group__form-input-label group__form-input-label_style ${
            otherProps.value.length ? 'shrink' : ''
          }`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  otherProps: PropTypes.array,
};

export default FormInput;
