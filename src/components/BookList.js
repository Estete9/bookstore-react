import { useSelector } from 'react-redux/es/hooks/useSelector';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/bookList.module.css';
import Book from './Book';

function BookList() {
  const { books } = useSelector((store) => store.books);

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
          <Book
            key={uuidv4()}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
