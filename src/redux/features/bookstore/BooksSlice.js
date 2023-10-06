import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const appId = 'I82EjikItlp9iO3iPf4c';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/`;
const initialState = {
  books: [],
  isLoading: true,
  error: null,
};

// prettier-ignore
const cleanData = (rawData) => Object.keys(rawData).map((key) => {
  const oldObj = rawData[key][0];
  return {
    id: key,
    ...oldObj,
  };
});

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

export const addBookAPI = createAsyncThunk('books/addBook', async (requestData, { rejectWithValue, dispatch }) => {
  // prettier-ignore
  const {
    item_id: itemId,
    title,
    author,
    category,
  } = requestData;
  try {
    await axios.post(
      url,
      {
        item_id: itemId,
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
    dispatch(fetchBooks());
    return 'Completed';
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

export const removeBookAPI = createAsyncThunk(
  'books/removeBook',
  async (requestData, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(url + requestData);
      dispatch(fetchBooks());
      return 'Removed';
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);

const BooksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (store) => {
        store.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (store, action) => {
        const bookData = cleanData(action.payload);
        store.books = bookData;
        store.isLoading = false;
      })
      .addCase(fetchBooks.rejected, (store, action) => {
        store.error = action.payload;
        store.isLoading = false;
      })
      .addCase(addBookAPI.pending, (store) => {
        store.isLoading = true;
      })
      .addCase(addBookAPI.fulfilled, (store) => {
        store.isLoading = false;
      })
      .addCase(addBookAPI.rejected, (store, action) => {
        store.error = action.payload;
        store.isLoading = false;
      })
      .addCase(removeBookAPI.pending, (store) => {
        store.isLoading = true;
      })
      .addCase(removeBookAPI.fulfilled, (store) => {
        store.isLoading = false;
      })
      .addCase(removeBookAPI.rejected, (store, action) => {
        store.error = action.payload;
        store.isLoading = false;
      });
  },
});

export const { addBook, removeBook } = BooksSlice.actions;
export default BooksSlice.reducer;
