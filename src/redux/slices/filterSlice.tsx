import { createSlice } from "@reduxjs/toolkit";

type FilterState = {
  searchValue: string;
  categoryId: number;
  sort: {
    name: string;
    sortProperty: string;
  };
};

const initialState: FilterState = {
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
    setCategoryId(state: FilterState, action) {
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

export const { setCategoryId, setSort, setFilters, setSearchValue } =
  filterSlice.actions;
export default filterSlice.reducer;
