// lib/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../rootSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      root: rootReducer,
    },
  });
};

// Define types for TypeScript users (optional)
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
