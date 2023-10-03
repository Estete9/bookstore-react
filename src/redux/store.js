import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/bookstore/BooksSlice';

const store = configureStore({
  reducer: {
    bookstore: cartReducer,
  },
});

export default store;
