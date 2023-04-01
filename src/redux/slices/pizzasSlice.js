import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzasStatus",
  async ({ category, sortBy, order, search }) => {
    const res = await fetch(
      `https://63dea3ff9fa0d600600259c3.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    let pizzas = await res.json();
    return pizzas;
  }
);

const initialState = {
  items: [],
  status: '',
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
        state.status = 'loading'
    },
    [fetchPizzas.fulfilled]: (state, action) => {
        state.items = action.payload
        state.status = 'success'
    },
    [fetchPizzas.rejected]: (state, action) => {
        state.status = 'error'
        state.items = []
    },
  }
});

export const { setItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;
