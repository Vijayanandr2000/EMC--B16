import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from "./features/counter";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
