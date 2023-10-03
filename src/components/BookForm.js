import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/features/bookstore/BooksSlice';
import styles from '../styles/bookForm.module.css';

function BookForm() {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    id: '',
    title: '',
    author: '',
  });

  const handleAddBook = () => {
    const newId = uuidv4();
    const bookWithId = {
      id: newId,
      title: newBook.title,
      author: newBook.author,
    };

    dispatch(addBook(bookWithId));
    setNewBook({ id: '', title: '', author: '' });
  };

  return (
    <div className={styles.formWrapper}>
      <h3>ADD NEW BOOK</h3>
      <input
        className={styles.bookTitleInput}
        placeholder="Book title..."
        value={newBook.title}
        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
      />
      <input
        className={styles.bookAuthorInput}
        placeholder="Book author..."
        value={newBook.author}
        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
      />
      <button
        className={styles.addBookBtn}
        type="button"
        onClick={handleAddBook}
      >
        ADD BOOK
      </button>
    </div>
  );
}

export default BookForm;
