import { createSlice } from '@reduxjs/toolkit';

export const totalGoldSlice = createSlice({
  name: 'totalGold',
  initialState: {
    players: {
      playerOne: { totalGold: 1000 },
      playerTwo: { totalGold: 1000 },
    },
  },
  reducers: {
    decreaseTotalGold: (state, action) => {
      const { playerId, amount } = action.payload;

      if (state.players[playerId]) {
        state.players[playerId].totalGold -= amount;
      }
    },
    updateTotalGold: (state, action) => {
      const { playerId, goldPerTurn } = action.payload;
      if (state.players[playerId]) {
        state.players[playerId].totalGold += goldPerTurn;
      }
    },
  },
});

export const { decreaseTotalGold, updateTotalGold } = totalGoldSlice.actions;

export default totalGoldSlice.reducer;
