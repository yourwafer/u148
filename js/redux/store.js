import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import reduces from './reducer/index'

let middleware = ()=>{};
if(__DEV__) {
	middleware = applyMiddleware(promiseMiddleware(), thunkMiddleware, createLogger())(createStore);
}else{
	middleware = applyMiddleware(promiseMiddleware(), thunkMiddleware)(createStore);
}
export default middleware(reduces);