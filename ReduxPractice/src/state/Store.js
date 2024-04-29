import { applyMiddleware, legacy_createStore } from 'redux'
import { legacy_createStore as createStore } from 'redux';
import Reducers from './Reducers'
import thunk from "redux-thunk"
export const Store = legacy_createStore(Reducers, {}, applyMiddleware(thunk))