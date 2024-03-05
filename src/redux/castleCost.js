import { createSlice } from '@reduxjs/toolkit';

import { settings } from '../data/settings';

const { castle } = settings;

const initialState = {
  players: {
    playerOne: { castleCost: castle.cost.initial },
    playerTwo: { castleCost: castle.cost.initial },
  },
};

export const castleCostSlice = createSlice({
  name: 'castleCost',
  initialState,
  reducers: {
    increaseCastleCost: (state, action) => {
      const { playerId } = action.payload;
      if (state.players[playerId]) {
        state.players[playerId].castleCost += castle.cost.increaseBy;
      }
    },
    resetCastleCost: () => initialState,
  },
});

export const { increaseCastleCost, resetCastleCost } = castleCostSlice.actions;

export default castleCostSlice.reducer;
