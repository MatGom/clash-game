import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalCampAttack: {
    player1camp1: 0,
    player1camp2: 0,
    player1camp3: 0,
    player2camp1: 0,
    player2camp2: 0,
    player2camp3: 0,
  },
  totalCampDefence: {
    player1camp1: 0,
    player1camp2: 0,
    player1camp3: 0,
    player2camp1: 0,
    player2camp2: 0,
    player2camp3: 0,
  },
};

export const campStatsStateSlice = createSlice({
  name: 'campStatsState',
  initialState,
  reducers: {
    increaseAttack: (state, action) => {
      const { campId, attack } = action.payload;
      state.totalCampAttack[campId] += attack;
    },
    increaseDefence: (state, action) => {
      const { campId, defence } = action.payload;
      state.totalCampDefence[campId] += defence;
    },
    resetCampStats: () => initialState,
  },
});

export const { increaseAttack, increaseDefence, resetCampStats } = campStatsStateSlice.actions;

export default campStatsStateSlice.reducer;
