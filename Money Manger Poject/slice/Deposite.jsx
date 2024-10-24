import { createSlice } from "@reduxjs/toolkit";
import { addexpense } from "./Expense";


const budgetSlice=createSlice({
    name:"budget",
    initialState:{
        amount:0,
    },
    reducers:{
        addBudget:(state,action)=>{
            state.amount+=Number(action.payload);

        },


    },
    extraReducers: (builder)=>{
        builder.addCase(addexpense, (state, action) => {
            state.amount -= action.payload.expense;
        })
    }
})

export const { addBudget } = budgetSlice.actions;
export default budgetSlice.reducer;