import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countSlice";
import bankReducer from "./bankSlice";


export const store = configureStore(
    {reducer:{
        Bank: bankReducer,Count:countReducer
    }}
);