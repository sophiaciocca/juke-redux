import { createStore } from 'redux';
import reducer from './reducers/root-reducer';
import  {applyMiddleware }  from 'redux'; //helper function for middleware
import  loggerMiddleware  from 'redux-logger';
import thunkMiddleware from 'redux-thunk';


//let thisisavariable = applyMiddleware(loggerMiddleware);

export default createStore(reducer, applyMiddleware(loggerMiddleware, thunkMiddleware));