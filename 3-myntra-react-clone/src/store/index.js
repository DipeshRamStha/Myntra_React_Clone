import { configureStore } from "@reduxjs/toolkit";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
  },
});

export default myntraStore;
