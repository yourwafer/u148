import { combineReducers } from 'redux';
import { SearchArticleReducer } from './searchArtical';

export default combineReducers({
	articleCondition: SearchArticleReducer
});