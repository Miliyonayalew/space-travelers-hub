import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer, { fetchRocketsThunk } from './rocket/rocket';
import missionsReducer, { fetchMissionsThunk } from './mission/mission';

const store = configureStore({
  reducer: {
    rocketsReducer,
    missionsReducer,
  },
}, applyMiddleware(thunk, logger));

store.dispatch(fetchRocketsThunk());
store.dispatch(fetchMissionsThunk());

export default store;
