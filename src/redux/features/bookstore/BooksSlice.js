import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const appId = 'I82EjikItlp9iO3iPf4c';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;
const initialState = {
  books: [],
  isLoading: true,
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

export const addBookAPI = createAsyncThunk('books/addBook', async (requestData, { rejectWithValue }) => {
  const {
    itemId, title, author, category,
  } = requestData;
  try {
    return await axios.post(
      url,
      {
        itemId,
        title,
        author,
        category,
      },
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

const BooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (store, action) => {
      console.log(`store.books: ${store.books}`);
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
        console.log(`action.payload in fetchBooks.fulfilled: ${JSON.stringify(action.payload)}`);
        const rawBookData = action.payload;
        const bookData = Object.keys(rawBookData).map((key) => {
          const oldObj = rawBookData[key][0];
          return {
            id: key,
            ...oldObj,
          };
        });
        console.log(`processed bookData: ${bookData}`);
        store.books = bookData;
      })
      .addCase(fetchBooks.rejected, (store, action) => {
        store.isLoading = false;
        store.error = action.payload;
      });
  },
});

export const { addBook, removeBook } = BooksSlice.actions;
export default BooksSlice.reducer;
