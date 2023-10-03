import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const BooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (store, action) => {
      const { title, author } = action.payload;
      const newBook = {
        title,
        author,
      };
      store.books.push(newBook);
    },
    removeBook: (store) => {
      console.log(store.books);
    },
  },
});

export const { addBook, removeBook } = BooksSlice.actions;
export default BooksSlice.reducer;
