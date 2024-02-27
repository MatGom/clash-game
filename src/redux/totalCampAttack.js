import { createSlice } from '@reduxjs/toolkit';

export const totalCampAttackSlice = createSlice({
  name: 'totalCampAttack',
  initialState: {
    totalCampAttack: 0,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.totalCampAttack += action.payload;
    },
  },
});

export const { incrementByAmount } = totalCampAttackSlice.actions;

export default totalCampAttackSlice.reducer;
