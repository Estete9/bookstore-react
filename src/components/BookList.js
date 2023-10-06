import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/bookList.module.css';
import Book from './Book';
import { fetchBooks } from '../redux/features/bookstore/BooksSlice';

function BookList() {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((store) => ({
    books: store.books.books,
    isLoading: store.books.isLoading,
    error: store.books.error,
  }));

  useEffect(() => {
    if (isLoading) {
      dispatch(fetchBooks());
    }
  }, [dispatch, isLoading]);

  if (isLoading) {
    return <div>Users loading...</div>;
  }

  if (error) {
    return <div>{`We encountered an error: ${JSON.stringify(error)}`}</div>;
  }

  if (!books.length) {
    return (
      <section className={styles.bookList}>
        <header>
          <h2>your bookstore</h2>
          <h4 className={styles.emptyList}>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <div className={styles.bookList}>
      <ul>
        {books.map((book) => (
          <Book key={uuidv4()} id={book.id} title={book.title} author={book.author} />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
