import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  players: {
    playerOne: { castleCost: 50 },
    playerTwo: { castleCost: 50 },
  },
};

export const castleCostSlice = createSlice({
  name: 'castleCost',
  initialState,
  reducers: {
    increaseCastleCost: (state, action) => {
      const { playerId } = action.payload;
      if (state.players[playerId]) {
        state.players[playerId].castleCost += 10;
      }
    },
    resetCastleCost: () => initialState,
  },
});

export const { increaseCastleCost, resetCastleCost } = castleCostSlice.actions;

export default castleCostSlice.reducer;
