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
    transferGold: (state, action) => {
      const { winnerId, loserId, amount } = action.payload;
      if (state.players[winnerId] && state.players[loserId]) {
        state.players[winnerId].totalGold += amount;
        state.players[loserId].totalGold -= amount;
      }
    },
  },
});

export const { decreaseTotalGold, updateTotalGold, transferGold } = totalGoldSlice.actions;

export default totalGoldSlice.reducer;
