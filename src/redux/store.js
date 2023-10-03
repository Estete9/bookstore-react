import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './features/bookstore/BooksSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
