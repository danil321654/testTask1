import {combineReducers} from 'redux';
import {imageReducer} from './imageReducer'

export const reducer = combineReducers({images: imageReducer});
