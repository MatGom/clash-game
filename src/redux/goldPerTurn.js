import { createSlice } from '@reduxjs/toolkit';

export const goldPerTurnSlice = createSlice({
  name: 'goldPerTurn',
  initialState: {
    goldPerTurn: 100,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.goldPerTurn += action.payload;
    },
  },
});

export const { incrementByAmount } = goldPerTurnSlice.actions;

export default goldPerTurnSlice.reducer;
