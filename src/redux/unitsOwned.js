import { createSlice } from '@reduxjs/toolkit';

export const unitsOwnedSlice = createSlice({
  name: 'unitsOwned',
  initialState: {
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
  },
  reducers: {
    incrementOwned: (state, action) => {
      const { campId, unitId } = action.payload;
      if (!state.camps[campId]) {
        state.camps[campId] = {};
      }
      if (!state.camps[campId][unitId]) {
        state.camps[campId][unitId] = 0;
      }
      state.camps[campId][unitId] += 1;
    },
  },
});

export const { incrementOwned } = unitsOwnedSlice.actions;

export default unitsOwnedSlice.reducer;
