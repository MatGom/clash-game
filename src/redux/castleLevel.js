import { createSlice } from '@reduxjs/toolkit';

export const castleLevelSlice = createSlice({
  name: 'castleLevel',
  initialState: {
    castleLevel: 1,
  },
  reducers: {
    increment: state => {
      state.castleLevel += 1;
    },
  },
});

export const { increment } = castleLevelSlice.actions;

export default castleLevelSlice.reducer;
