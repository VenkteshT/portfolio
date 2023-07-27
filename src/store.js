import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./redux/slice";

const store = configureStore({
  reducer: {
    Reducer,
  },
});

export default store;
