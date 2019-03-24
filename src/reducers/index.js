import { combineReducers } from 'redux';
import todos from './todos';
import lang from './lang';

export default combineReducers({
    lang,
    todos,
});