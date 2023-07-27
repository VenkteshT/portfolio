import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: {
    theme: "default",
  },
  isFullScreen: false,
  page: {
    home: false,
    about: false,
    services: false,
    portfolio: false,
    contact: false,
    cirtificates: false,
  },
};

const slice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setFullScreen(state, action) {
      const { val } = action.payload;
      state.isFullScreen = val;
    },
    setPage(state, action) {
      const { curPage } = action.payload;
      state.page = {
        home: false,
        about: false,
        services: false,
        portfolio: false,
        contact: false,
        cirtificates: false,
        [curPage]: true,
      };
    },

    setTheme(state, action) {
      const { color } = action.payload;
      state.theme.theme = color;
    },
  },
});

// reducer
export const Reducer = slice.reducer;

// actions
export const actions = slice.actions;

// state selector
export const stateSelector = (s) => s.Reducer;
