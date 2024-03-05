import { configureStore } from '@reduxjs/toolkit';
import totalCampAttackReducer from './totalCampAttack';
import totalCampDefenceReducer from './totalCampDefence';
import unitsOwnedReducer from './unitsOwned';

import castleStateReducer from './castleStateSlice';
import goldStateReducer from './goldStateSlice';

export default configureStore({
  reducer: {
    totalCampAttack: totalCampAttackReducer,
    totalCampDefence: totalCampDefenceReducer,
    unitsOwned: unitsOwnedReducer,

    castleState: castleStateReducer,
    goldState: goldStateReducer,
  },
});
