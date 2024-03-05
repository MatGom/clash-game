import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  camps: {
    playerOneCampOne: {
      unit1: 0,
      unit2: 0,
      unit3: 0,
      unit4: 0,
    },
    playerOneCampTwo: {
      unit1: 0,
      unit2: 0,
      unit3: 0,
      unit4: 0,
    },
    playerOneCampThree: {
      unit1: 0,
      unit2: 0,
      unit3: 0,
      unit4: 0,
    },
    playerTwoCampOne: {
      unit1: 0,
      unit2: 0,
      unit3: 0,
      unit4: 0,
    },
    playerTwoCampTwo: {
      unit1: 0,
      unit2: 0,
      unit3: 0,
      unit4: 0,
    },
    playerTwoCampThree: {
      unit1: 0,
      unit2: 0,
      unit3: 0,
      unit4: 0,
    },
  },
};

export const unitsOwnedStateSlice = createSlice({
  name: 'unitsOwnedState',
  initialState,
  reducers: {
    increaseOwned: (state, action) => {
      const { campId, unitId } = action.payload;
      if (!state.camps[campId]) {
        state.camps[campId] = {};
      }
      if (!state.camps[campId][unitId]) {
        state.camps[campId][unitId] = 0;
      }
      state.camps[campId][unitId] += 1;
    },
    resetUnitsOwned: () => initialState,
  },
});

export const { increaseOwned, resetUnitsOwned } = unitsOwnedStateSlice.actions;

export default unitsOwnedStateSlice.reducer;
