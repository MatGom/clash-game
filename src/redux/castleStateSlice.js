import { createSlice } from '@reduxjs/toolkit';

import { settings } from '../data/settings';

const { castle } = settings;

const initialState = {
  players: {
    playerOne: {
      castleCost: castle.cost.initial,
      castleLevel: castle.level.initial,
    },
    playerTwo: {
      castleCost: castle.cost.initial,
      castleLevel: castle.level.initial,
    },
  },
};

export const castleStateSlice = createSlice({
  name: 'castleState',
  initialState,
  reducers: {
    upgradeCastleLevel: (state, action) => {
      const { playerId } = action.payload;
      if (state.players[playerId]) {
        state.players[playerId].castleLevel += castle.level.upgradeBy;
      }
    },
    increaseCastleCost: (state, action) => {
      const { playerId } = action.payload;
      if (state.players[playerId]) {
        state.players[playerId].castleCost += castle.cost.increaseBy;
      }
    },
    resetCastle: () => initialState,
  },
});

export const { upgradeCastleLevel, increaseCastleCost, resetCastle } = castleStateSlice.actions;

export default castleStateSlice.reducer;
