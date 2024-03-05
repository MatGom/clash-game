import { createSlice } from '@reduxjs/toolkit';

import { settings } from '../data/settings';

const { gold } = settings;

const initialState = {
  players: {
    playerOne: { goldToSpendThisTurn: gold.limit.thisTurn.initial, goldToSpendNextTurn: gold.limit.nextTurn.initial },
    playerTwo: { goldToSpendThisTurn: gold.limit.thisTurn.initial, goldToSpendNextTurn: gold.limit.nextTurn.initial },
  },
};

export const goldToSpendPerTurnSlice = createSlice({
  name: 'goldToSpendPerTurn',
  initialState,
  reducers: {
    upgradeGoldToSpendNextTurn: (state, action) => {
      const { playerId } = action.payload;
      if (state.players[playerId]) {
        state.players[playerId].goldToSpendNextTurn += gold.limit.nextTurn.increaseBy;
      }
    },
    decreaseGoldToSpendThisTurn: (state, action) => {
      const { playerId, amount } = action.payload;
      if (state.players[playerId]) {
        state.players[playerId].goldToSpendThisTurn -= amount;
      }
    },
    renewGoldToSpendNextTurn: (state, action) => {
      const { playerId } = action.payload;
      state.players[playerId].goldToSpendThisTurn = state.players[playerId].goldToSpendNextTurn;
    },
    resetGoldToSpendPerTurn: () => initialState,
  },
});

export const {
  upgradeGoldToSpendNextTurn,
  decreaseGoldToSpendThisTurn,
  renewGoldToSpendNextTurn,
  resetGoldToSpendPerTurn,
} = goldToSpendPerTurnSlice.actions;

export default goldToSpendPerTurnSlice.reducer;
