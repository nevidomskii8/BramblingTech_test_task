import { combineReducers } from '@reduxjs/toolkit';
import stateReducer from './reducer/stateReducer';
import storageReducer from './reducer/storageReducer';

export default combineReducers({
  state: stateReducer,
  storage: storageReducer,
});