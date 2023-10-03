import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './feature/bookstore/BooksSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
