import {combineReducers} from 'redux';
import news from './news';
import users from './users';

const AppReducer = combineReducers({
    news,
    users
});

export default AppReducer;
