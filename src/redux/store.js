import { configureStore } from '@reduxjs/toolkit';
import totalGoldReducer from './totalGold';
import castleLevelReducer from './castleLevel';
import totalCampAttackReducer from './totalCampAttack';
import totalCampDefenceReducer from './totalCampDefence';
import goldPerTurnReducer from './goldPerTurn';
import unitsOwnedReducer from './unitsOwned';
import goldToSpendThisTurnReducer from './goldToSpendThisTurn';

export default configureStore({
  reducer: {
    totalGold: totalGoldReducer,
    castleLevel: castleLevelReducer,
    totalCampAttack: totalCampAttackReducer,
    totalCampDefence: totalCampDefenceReducer,
    goldPerTurn: goldPerTurnReducer,
    unitsOwned: unitsOwnedReducer,
    goldToSpendThisTurn: goldToSpendThisTurnReducer,
  },
});
