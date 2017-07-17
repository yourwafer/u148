import { combineReducers } from 'redux';
import { SearchArticleReducer } from './searchArtical';
import { SelectArticleReducer } from './selectArtical';

export default combineReducers({
	articleCondition: SearchArticleReducer,
	article: SelectArticleReducer
});