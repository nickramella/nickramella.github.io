// lib/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
};

// Define types for TypeScript users (optional)
// export type AppStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<AppStore['getState']>;
// export type AppDispatch = AppStore['dispatch'];
