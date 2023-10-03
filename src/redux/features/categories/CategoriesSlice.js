import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'construction',
};

const CategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: () => 'Under Construction',
  },
});

export const { checkStatus } = CategoriesSlice.actions;
export default CategoriesSlice.reducer;
