import { configureStore } from '@reduxjs/toolkit';
import totalGoldReducer from './totalGold';
import totalCampAttackReducer from './totalCampAttack';
import totalCampDefenceReducer from './totalCampDefence';
import goldPerTurnReducer from './goldPerTurn';
import unitsOwnedReducer from './unitsOwned';
import goldToSpendPerTurnReducer from './goldToSpendPerTurn';

import castleStateReducer from './castleStateSlice';

export default configureStore({
  reducer: {
    totalGold: totalGoldReducer,
    totalCampAttack: totalCampAttackReducer,
    totalCampDefence: totalCampDefenceReducer,
    goldPerTurn: goldPerTurnReducer,
    unitsOwned: unitsOwnedReducer,
    goldToSpendPerTurn: goldToSpendPerTurnReducer,

    castleState: castleStateReducer,
  },
});
