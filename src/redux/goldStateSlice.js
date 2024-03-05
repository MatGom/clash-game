import { createSlice } from '@reduxjs/toolkit';

import { settings } from '../data/settings';

const { gold } = settings;

const initialState = {
  players: {
    playerOne: {
      totalGold: gold.total.initial,
      goldIncome: gold.income.initial,
      goldToSpendThisTurn: gold.limit.thisTurn.initial,
      goldToSpendNextTurn: gold.limit.nextTurn.initial,
    },
    playerTwo: {
      totalGold: gold.total.initial,
      goldIncome: gold.income.initial,
      goldToSpendThisTurn: gold.limit.thisTurn.initial,
      goldToSpendNextTurn: gold.limit.nextTurn.initial,
    },
  },
};

export const goldStateSlice = createSlice({
  name: 'goldState',
  initialState,
  reducers: {
    decreaseTotalGold: (state, action) => {
      const { playerId, amount } = action.payload;
      if (state.players[playerId]) {
        state.players[playerId].totalGold -= amount;
      }
    },
    updateTotalGold: (state, action) => {
      const { playerId, goldIncome } = action.payload;
      if (state.players[playerId]) {
        state.players[playerId].totalGold += goldIncome;
      }
    },
    transferGold: (state, action) => {
      const { winnerId, loserId, amount } = action.payload;
      if (state.players[winnerId] && state.players[loserId]) {
        state.players[winnerId].totalGold += amount;
        state.players[loserId].totalGold -= amount;
      }
    },
    upgradeGoldIncome: (state, action) => {
      const { playerId } = action.payload;
      if (state.players[playerId]) {
        state.players[playerId].goldIncome += gold.income.increaseBy;
      }
    },
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
    setGoldToSpendNextTurn: (state, action) => {
      const { playerId } = action.payload;
      state.players[playerId].goldToSpendThisTurn = state.players[playerId].goldToSpendNextTurn;
    },
    resetGold: () => initialState,
  },
});

export const {
  decreaseTotalGold,
  updateTotalGold,
  transferGold,
  upgradeGoldIncome,
  upgradeGoldToSpendNextTurn,
  decreaseGoldToSpendThisTurn,
  setGoldToSpendNextTurn,
  resetGold,
} = goldStateSlice.actions;

export default goldStateSlice.reducer;
