import { createSlice } from '@reduxjs/toolkit';

export const castleLevelSlice = createSlice({
  name: 'castleLevel',
  initialState: {
    players: {
      playerOne: { castleLevel: 1 },
      playerTwo: { castleLevel: 1 },
    },
  },
  reducers: {
    upgradeCastleLevel: (state, action) => {
      const { playerId } = action.payload;
      if (state.players[playerId]) {
        state.players[playerId].castleLevel += 1;
      }
    },
  },
});

export const { upgradeCastleLevel } = castleLevelSlice.actions;

export default castleLevelSlice.reducer;
