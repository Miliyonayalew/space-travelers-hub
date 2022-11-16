import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer, { fetchRocketsThunk } from './rocket/rocket';

const store = configureStore({
  reducer: {
    rocketsReducer,
  },
}, applyMiddleware(thunk, logger));

store.dispatch(fetchRocketsThunk());

export default store;
