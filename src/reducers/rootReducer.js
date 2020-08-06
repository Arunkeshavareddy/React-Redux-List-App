import { combineReducers } from 'redux';
import appListReducer from './appList';

const rootReducer = combineReducers({
    appList : appListReducer
 })
 
 export default rootReducer