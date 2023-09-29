import { useState } from 'react';
import styles from '../styles/bookList.module.css';
import Book from './Book';

function BookList() {
  const [booksListState, setBooksListState] = useState([
    { id: 0, title: 'book 1', author: 'author 1' },
  ]);

  return (
    <div className={styles.bookList}>
      <ul>
        {booksListState.map((book) => (
          <Book
            key={book.title}
            title={book.title}
            author={book.author}
            removeBook={() => {
              // TODO change this to remove correctly
              setBooksListState();
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
