import { createSlice } from '@reduxjs/toolkit';

import { settings } from '../data/settings';

const { castle } = settings;

const initialState = {
  players: {
    playerOne: { castleLevel: castle.level.initial },
    playerTwo: { castleLevel: castle.level.initial },
  },
};

export const castleLevelSlice = createSlice({
  name: 'castleLevel',
  initialState,
  reducers: {
    upgradeCastleLevel: (state, action) => {
      const { playerId } = action.payload;
      if (state.players[playerId]) {
        state.players[playerId].castleLevel += castle.level.upgradeBy;
      }
    },
    resetCastleLevel: () => initialState,
  },
});

export const { upgradeCastleLevel, resetCastleLevel } = castleLevelSlice.actions;

export default castleLevelSlice.reducer;
