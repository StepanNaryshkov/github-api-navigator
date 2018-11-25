import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users';

const reducers = combineReducers({
  router: routerReducer,
  users
});

export default reducers;
