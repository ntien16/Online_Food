import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: '',
  selectedSortOption: '',
  searchText: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryFilter: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSortOption: (state, action) => {
      state.selectedSortOption = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { setCategoryFilter, setSortOption, setSearchQuery } = filterSlice.actions;

export default filterSlice.reducer;
