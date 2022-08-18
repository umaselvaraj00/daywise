import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
//import countReducer from "./countSlice";
//import bankReducer from "./bankSlice";
import todoReducer from "./TodoSlice";
import saga from "./saga";

let SagaMiddleware=createSagaMiddleware();


export const store = configureStore(
    {reducer:{
        todo: todoReducer
    },
middleware:(getDefaultMiddleware)=>
getDefaultMiddleware({thunk:false}).concat(SagaMiddleware),
}
);
SagaMiddleware.run(saga);