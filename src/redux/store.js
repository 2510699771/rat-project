import { createStore, applyMiddleware } from "redux";
import combineReducers from './combineReducers'
import createSagaMiddleware from 'redux-saga'
import rootsaga from "./rootSaga";

const saga = createSagaMiddleware()

const store = createStore(combineReducers, applyMiddleware(saga));
saga.run(rootsaga)
export default store
