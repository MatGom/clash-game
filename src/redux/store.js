import { configureStore } from '@reduxjs/toolkit';

import castleStateReducer from './castleStateSlice';
import goldStateReducer from './goldStateSlice';
import campStatsStateSliceReducer from './campStatsStateSlice';
import unitsOwnedStateReducer from './unitsOwnedStateSlice';

export default configureStore({
  reducer: {
    castleState: castleStateReducer,
    goldState: goldStateReducer,
    campStatsState: campStatsStateSliceReducer,
    unitsOwnedState: unitsOwnedStateReducer,
  },
});
