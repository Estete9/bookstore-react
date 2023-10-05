import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const appId = 'I82EjikItlp9iO3iPf4c';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;
const initialState = {
  books: [],
  isLoading: true,
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${baseUrl}/apps/${appId}/books`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (store) => {
        store.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (store, action) => {
        store.isLoading = false;
        store.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (store, action) => {
        store.isLoading = false;
        store.error = action.payload;
      });
  },
});

export const { addBook, removeBook } = BooksSlice.actions;
export default BooksSlice.reducer;
