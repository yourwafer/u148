import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reduces from './reducer/index'

const applyStoreMiddleware = applyMiddleware(thunkMiddleware)(createStore);
export default applyStoreMiddleware(reduces);