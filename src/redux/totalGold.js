import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  players: {
    playerOne: { totalGold: 1000 },
    playerTwo: { totalGold: 1000 },
  },
};

export const totalGoldSlice = createSlice({
  name: 'totalGold',
  initialState,
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
    resetTotalGold: () => initialState,
  },
});

export const { decreaseTotalGold, updateTotalGold, transferGold, resetTotalGold } = totalGoldSlice.actions;

export default totalGoldSlice.reducer;
