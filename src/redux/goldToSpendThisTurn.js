import { createSlice } from '@reduxjs/toolkit';

export const goldToSpendThisTurnSlice = createSlice({
  name: 'goldToSpendThisTurn',
  initialState: {
    players: {
      playerOne: { goldToSpendThisTurn: 100 },
      playerTwo: { goldToSpendThisTurn: 100 },
    },
  },
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
  },
});

export const { upgradeGoldToSpendThisTurn, decreaseGoldToSpendThisTurn } = goldToSpendThisTurnSlice.actions;

export default goldToSpendThisTurnSlice.reducer;
