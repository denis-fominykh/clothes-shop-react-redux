import React from 'react';

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

export default FormInput;
