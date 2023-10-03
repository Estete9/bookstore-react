import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const BooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (store, action) => {
      const { id, title, author } = action.payload;
      const newBook = {
        id,
        title,
        author,
      };
      store.books.push(newBook);
    },
    removeBook: (store, action) => {
      const id = action.payload;
      store.books = store.books.filter((book) => book.id !== id);
    },
  },
});

export const { addBook, removeBook } = BooksSlice.actions;
export default BooksSlice.reducer;
