import {combineReducers} from 'redux';
import Settings from './settings';
import ViewPort from './viewport';
import UserDetail from './userDetail';
import Questions from './questions';




const rootReducers = combineReducers({
  ViewPort ,  Settings , UserDetail , Questions

});


export default rootReducers;
