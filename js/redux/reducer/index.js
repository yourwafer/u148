import { combineReducers } from 'redux';
import { SearchArticleReducer } from './searchArtical';
import { SelectArticleReducer } from './selectArtical';
import { LoginReducer } from './login';

export default combineReducers({
	articleCondition: SearchArticleReducer,
	article: SelectArticleReducer,
	userInfo: LoginReducer
});