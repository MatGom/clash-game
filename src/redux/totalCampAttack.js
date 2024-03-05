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
};

export const totalCampAttackSlice = createSlice({
  name: 'totalCampAttack',
  initialState,
  reducers: {
    increaseAttack: (state, action) => {
      const { campId, attack } = action.payload;
      if (state.totalCampAttack[campId] === undefined) {
        state.totalCampAttack[campId] = 0;
      }
      state.totalCampAttack[campId] += attack;
    },
    resetTotalCampAttack: () => initialState,
  },
});

export const { increaseAttack, resetTotalCampAttack } = totalCampAttackSlice.actions;

export default totalCampAttackSlice.reducer;
