import { createSlice } from '@reduxjs/toolkit';

export const totalCampDefenceSlice = createSlice({
  name: 'totalCampDefence',
  initialState: {
    totalCampDefence: 0,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.totalCampDefence += action.payload;
    },
  },
});

export const { incrementByAmount } = totalCampDefenceSlice.actions;

export default totalCampDefenceSlice.reducer;
