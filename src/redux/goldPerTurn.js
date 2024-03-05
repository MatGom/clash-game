import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  players: {
    playerOne: { goldPerTurn: 100 },
    playerTwo: { goldPerTurn: 100 },
  },
};

export const goldPerTurnSlice = createSlice({
  name: 'goldPerTurn',
  initialState,
  reducers: {
    upgradeGoldPerTurn: (state, action) => {
      const { playerId } = action.payload;
      if (state.players[playerId]) {
        state.players[playerId].goldPerTurn += 50;
      }
    },
    resetGoldPerTurn: () => initialState,
  },
});

export const { upgradeGoldPerTurn, resetGoldPerTurn } = goldPerTurnSlice.actions;

export default goldPerTurnSlice.reducer;
