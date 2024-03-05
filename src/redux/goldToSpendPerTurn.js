import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  players: {
    playerOne: { goldToSpendThisTurn: 100, goldToSpendNextTurn: 100 },
    playerTwo: { goldToSpendThisTurn: 100, goldToSpendNextTurn: 100 },
  },
};

export const goldToSpendPerTurnSlice = createSlice({
  name: 'goldToSpendPerTurn',
  initialState,
  reducers: {
    upgradeGoldToSpendNextTurn: (state, action) => {
      const { playerId } = action.payload;
      if (state.players[playerId]) {
        state.players[playerId].goldToSpendNextTurn += 10;
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
