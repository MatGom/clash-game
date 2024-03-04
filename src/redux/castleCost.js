import { createSlice } from '@reduxjs/toolkit';

export const castleCostSlice = createSlice({
  name: 'castleCost',
  initialState: {
    players: {
      playerOne: { castleCost: 50 },
      playerTwo: { castleCost: 50 },
    },
  },
  reducers: {
    increaseCastleCost: (state, action) => {
      const { playerId } = action.payload;
      if (state.players[playerId]) {
        state.players[playerId].castleCost += 10;
      }
    },
  },
});

export const { increaseCastleCost } = castleCostSlice.actions;

export default castleCostSlice.reducer;
