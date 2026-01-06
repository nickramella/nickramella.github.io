import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
  screenSize: "large"
};

export const rootSlice = createSlice({
  name: 'windowSize',
  initialState,
  reducers: {
    setWindowSize: (state, action) => {
      state.screenSize = action.payload.width > 780 ? "large" : "small";
    },
  }
});

export const { setWindowSize } = rootSlice.actions;
export default rootSlice.reducer;
