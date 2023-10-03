import { useSelector } from 'react-redux/es/hooks/useSelector';
import styles from '../styles/bookList.module.css';
import Book from './Book';

function BookList() {
  const { books } = useSelector((store) => store.books);

  if (!books.length) {
    return (
      <section className={styles.bookList}>
        {/* cart header */}
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
            key={book.title}
            title={book.title}
            author={book.author}
            removeBook={() => {
              // TODO change this to remove correctly
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
