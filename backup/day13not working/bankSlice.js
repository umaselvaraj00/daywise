import {createSlice} from "@reduxjs/toolkit";
const initialState ={amount:0,bankbalance:0}

const bankSlice=createSlice(
    {
        name:"Bank",
        initialState,
        reducers:{
            setAmount: (state, action)=>{
                state.amount=action.payload
            },
            deposit: ()=>{},
            withdraw: ()=>{}
        }
    }
);
export const {setAmount,deposit,withdraw}=bankSlice.actions;
export default bankSlice.reducer;