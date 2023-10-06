import React from 'react';
import PropTypes from 'prop-types';

function Button({ btnName, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {btnName}
    </button>
  );
}

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
