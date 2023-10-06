import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from '../styles/book.module.css';
import { removeBookAPI } from '../redux/features/bookstore/BooksSlice';
import Button from './Button';
import progressImg from '../assets/progressBar.png';

function Book({ id, title, author }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.bookItem}>
      <div className={styles.bookInfoSection}>
        <h5 className={styles.bookGenre}>Action</h5>
        <h3 className={styles.bookTitle}>{title}</h3>
        <h4 className={styles.bookAuthor}>{author}</h4>
        <div className={styles.bookBtnList}>
          <Button className={styles.removeBookBtn} btnName="Comments" onClick={() => {}} />
          <div className={styles.formSeparatorVert} />
          <Button className={styles.removeBookBtn} btnName="Remove" onClick={() => dispatch(removeBookAPI(id))} />
          <div className={styles.formSeparatorVert} />
          <Button className={styles.removeBookBtn} btnName="Edit" onClick={() => {}} />
        </div>
      </div>
      <div className={styles.percentagesSection}>
        <img className={styles.percentageImg} src={progressImg} alt="book percentage" />
        <div>
          <p className={styles.percentage}>64%</p>
          <p className={styles.completed}>Completed</p>
        </div>
      </div>
      <div className={styles.progressSection}>
        <h3 className={styles.progressTitle}>CURRENT CHAPTER</h3>
        <h3 className={styles.chapter}>CHAPTER 7</h3>
        <button className={styles.progressUpdateBtn} type="button">
          UPDATE PROGRESS
        </button>
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
