import {createSlice} from "@reduxjs/toolkit";

const initialState = {amount:0,bankbalance:0};

const bankSlice = createSlice(
    {
        name:"bank",
        initialState,
        reducers:{
            setAmount: (state,action)=>{
                state.amount=action.payload
            },
            deposit: (state,action)=>{
                state.bankbalance+=action.payload;
                console.log(state.bankbalance);
            },
            withdraw: (state,action)=>{
                state.bankbalance-=action.payload;
                console.log(state.bankbalance)
            }
        }
    }
);

export const {setAmount,deposit,withdraw} = bankSlice.actions;
export default bankSlice.reducer;

