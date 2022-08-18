import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import todoReducer from "./productSlice";
import saga from "./saga";

let  sagaMiddleware= createSagaMiddleware();

export const store = configureStore(
    {reducer:{
        todo: todoReducer
       
    },
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware({thunk:false}).concat(sagaMiddleware),
});
sagaMiddleware.run(saga);