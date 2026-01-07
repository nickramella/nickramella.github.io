import { createSlice } from '@reduxjs/toolkit';
import { AppStore, RootState } from './store/store';


const initialState = { 
  isSmallScreen: false,
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setWindowSize: (state, action) => {
      state.isSmallScreen = action.payload < 850;
    },
  }
});

export const selectIsSmallScreen = (state: RootState) => state.root.isSmallScreen;
export const { setWindowSize } = rootSlice.actions;
export default rootSlice.reducer;
