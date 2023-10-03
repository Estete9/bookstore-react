import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './features/bookstore/BooksSlice';
import categoriesReducer from './features/categories/CategoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
