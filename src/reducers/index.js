import { combineReducers } from 'redux';
import todos from './todos';
import lang from './lang';
import todoInput from './todoInput';

export default combineReducers({
    lang,
    todos,
    todoInput,
});