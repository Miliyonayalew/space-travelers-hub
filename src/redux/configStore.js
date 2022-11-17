import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer, { fetchRocketsThunk } from './rocket/rocket';
import missionsReducer, { fetchMissionsThunk } from './mission/mission';
import reservedRocketsReducer, { fetchReservedRocketsThunk } from './profile/profile';

const store = configureStore({
  reducer: {
    rocketsReducer,
    missionsReducer,
    reservedRocketsReducer,
  },
}, applyMiddleware(thunk, logger));

store.dispatch(fetchRocketsThunk());
store.dispatch(fetchMissionsThunk());
store.dispatch(fetchReservedRocketsThunk());

export default store;
