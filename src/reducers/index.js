import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import news from './news';
import users from './users';

const AppReducer = combineReducers({
  routing: routerReducer,
  news,
  users
});

export default AppReducer;
