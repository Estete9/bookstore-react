import { useState } from 'react';
import styles from '../styles/bookList.module.css';

function BookList() {
  const [booksListState, setBooksListState] = useState([
    { title: 'book 1', author: 'author 1' },
    { title: 'book 2', author: 'author 2' },
  ]);

  return (
    <div className={styles.bookList}>
      <ul>
        {booksListState.map((book) => (
          <li key={book.title} className={styles.bookItem}>
            <div>{`this is a book item ${book.title} by ${book.author}`}</div>
            <button onClick={setBooksListState} type="button">
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
