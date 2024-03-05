import { createSlice } from '@reduxjs/toolkit';

import { settings } from '../data/settings';

const { gold } = settings;

const initialState = {
  players: {
    playerOne: { goldPerTurn: gold.income.initial },
    playerTwo: { goldPerTurn: gold.income.initial },
  },
};

export const goldPerTurnSlice = createSlice({
  name: 'goldPerTurn',
  initialState,
  reducers: {
    upgradeGoldPerTurn: (state, action) => {
      const { playerId } = action.payload;
      if (state.players[playerId]) {
        state.players[playerId].goldPerTurn += gold.income.increaseBy;
      }
    },
    resetGoldPerTurn: () => initialState,
  },
});

export const { upgradeGoldPerTurn, resetGoldPerTurn } = goldPerTurnSlice.actions;

export default goldPerTurnSlice.reducer;
