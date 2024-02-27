import { createSlice } from '@reduxjs/toolkit';

export const totalGoldSlice = createSlice({
  name: 'totalGold',
  initialState: {
    totalGold: 1000,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.totalGold += action.payload;
    },
  },
});

export const { incrementByAmount } = totalGoldSlice.actions;

export default totalGoldSlice.reducer;
