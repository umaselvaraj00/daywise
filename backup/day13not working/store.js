import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "./bankSlice";
export const store=configureStore(
    {reducer:{
        bank:bankReducer
    }}
);