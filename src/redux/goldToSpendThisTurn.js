import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  players: {
    playerOne: { goldToSpendThisTurn: 100 },
    playerTwo: { goldToSpendThisTurn: 100 },
  },
};

export const goldToSpendThisTurnSlice = createSlice({
  name: 'goldToSpendThisTurn',
  initialState,
  reducers: {
    upgradeGoldToSpendThisTurn: (state, action) => {
      const { playerId } = action.payload;
      if (state.players[playerId]) {
        state.players[playerId].goldToSpendThisTurn += 10;
      }
    },
    decreaseGoldToSpendThisTurn: (state, action) => {
      const { playerId, amount } = action.payload;
      if (state.players[playerId]) {
        state.players[playerId].goldToSpendThisTurn -= amount;
      }
    },
    renewGoldToSpendThisTurn: (state, action) => {
      const { playerId, goldPerTurn } = action.payload;
      state.players[playerId].goldToSpendThisTurn = goldPerTurn;
    },
    resetGoldToSpendThisTurn: () => initialState,
  },
});

export const {
  upgradeGoldToSpendThisTurn,
  decreaseGoldToSpendThisTurn,
  renewGoldToSpendThisTurn,
  resetGoldToSpendThisTurn,
} = goldToSpendThisTurnSlice.actions;

export default goldToSpendThisTurnSlice.reducer;
