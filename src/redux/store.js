// import { createStore } from "redux";//createStore function is depreciated that's why cross line coming
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import productSaga from "./productSaga";
import createSagaMiddleware from 'redux-saga';


// const store=createStore(rootReducer);
const sagaMiddleware=createSagaMiddleware();
const store=configureStore(
    {
        reducer:rootReducer,
        middleware:()=>[sagaMiddleware]
    });
sagaMiddleware.run(productSaga)
export default store;

