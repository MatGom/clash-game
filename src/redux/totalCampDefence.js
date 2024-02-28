import { createSlice } from '@reduxjs/toolkit';

export const totalCampDefenceSlice = createSlice({
  name: 'totalCampDefence',
  initialState: {
    totalCampDefence: {
      player1camp1: 0,
      player1camp2: 0,
      player1camp3: 0,
      player2camp1: 0,
      player2camp2: 0,
      player2camp3: 0,
    },
  },
  reducers: {
    increaseDefence: (state, action) => {
      const { campId, defence } = action.payload;
      if (state.totalCampDefence[campId] === undefined) {
        state.totalCampDefence[campId] = 0;
      }
      state.totalCampDefence[campId] += defence;
    },
  },
});

export const { increaseDefence } = totalCampDefenceSlice.actions;

export default totalCampDefenceSlice.reducer;
