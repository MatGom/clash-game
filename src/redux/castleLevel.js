import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  players: {
    playerOne: { castleLevel: 1 },
    playerTwo: { castleLevel: 1 },
  },
};

export const castleLevelSlice = createSlice({
  name: 'castleLevel',
  initialState,
  reducers: {
    upgradeCastleLevel: (state, action) => {
      const { playerId } = action.payload;
      if (state.players[playerId]) {
        state.players[playerId].castleLevel += 1;
      }
    },
    resetCastleLevel: () => initialState,
  },
});

export const { upgradeCastleLevel, resetCastleLevel } = castleLevelSlice.actions;

export default castleLevelSlice.reducer;
