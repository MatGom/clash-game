import { createSlice } from '@reduxjs/toolkit';

export const goldPerTurnSlice = createSlice({
  name: 'goldPerTurn',
  initialState: {
    players: {
      playerOne: { goldPerTurn: 100 },
      playerTwo: { goldPerTurn: 100 },
    },
  },
  reducers: {
    upgradeGoldPerTurn: (state, action) => {
      const { playerId } = action.payload;
      if (state.players[playerId]) {
        state.players[playerId].goldPerTurn += 50;
      }
    },
    
  },
});

export const { upgradeGoldPerTurn } = goldPerTurnSlice.actions;

export default goldPerTurnSlice.reducer;
