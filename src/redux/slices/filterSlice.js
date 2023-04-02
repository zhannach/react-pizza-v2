import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  categoryId: 0,
  sort: {
    name: "popular",
    sortProperty: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setFilters(state, action) {
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const selectFilter = (state) => state.filter;
export const selectFilterSort = (state) => state.filter.sort;

export const { setCategoryId, setSort, setFilters, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
