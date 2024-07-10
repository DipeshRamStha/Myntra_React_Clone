import { createSlice } from "@reduxjs/toolkit";
const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (store, action) => {
      return store;
    },
  },
});

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
  },
});

export default myntraStore;
