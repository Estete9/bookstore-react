import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const BooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (store, action) => {
      store.books.push(action.payload);
    },
    removeBook: (store, action) => {
      const id = action.payload;
      store.books = store.books.filter((book) => book.id !== id);
    },
  },
});

export const { addBook, removeBook } = BooksSlice.actions;
export default BooksSlice.reducer;
