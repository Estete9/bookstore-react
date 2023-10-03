import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from '../styles/book.module.css';
import { removeBook } from '../redux/features/bookstore/BooksSlice';

function Book({ id, title, author }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.bookItem}>
      <div className={styles.bookInfoSection}>
        <h5 className={styles.bookGenre}>Action</h5>
        <h3 className={styles.bookTitle}>{title}</h3>
        <h4 className={styles.bookAuthor}>{author}</h4>
        <button
          className={styles.removeBookBtn}
          type="button"
          onClick={() => dispatch(removeBook(id))}
        >
          REMOVE
        </button>
      </div>
      <div className={styles.percentagesSection}>
        <img className={styles.percentageImg} src="/" alt="book percentage" />
        <div>
          <p className={styles.percentage}>64%</p>
          <p className={styles.completed}>Completed</p>
        </div>
      </div>
      <div className={styles.progressSection}>
        <h3>CURRENT CHAPTER</h3>
        <h3>CHAPTER 7</h3>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
