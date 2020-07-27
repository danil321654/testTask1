import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {reducer} from './src/reducers/reducer';
export const store = createStore(reducer, applyMiddleware(thunk, logger));
