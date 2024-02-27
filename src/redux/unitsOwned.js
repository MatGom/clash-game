import { createSlice } from '@reduxjs/toolkit';

export const unitsOwnedSlice = createSlice({
  name: 'unitsOwned',
  initialState: {
    unitsOwned: 0,
  },
  reducers: {
    increment: state => {
      state.unitsOwned += 1;
    },
  },
});

export const { increment } = unitsOwnedSlice.actions;

export default unitsOwnedSlice.reducer;
