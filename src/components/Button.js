import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/book.module.css';

function Button({ btnName, onClick }) {
  return (
    <button className={styles.bookBtn} type="button" onClick={onClick}>
      {btnName}
    </button>
  );
}

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
