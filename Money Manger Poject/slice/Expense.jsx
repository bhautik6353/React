import { createSlice } from "@reduxjs/toolkit";


const expenseSlice=createSlice({
    name:"expense",
    initialState:{
        explist:[]
    },
    reducers:{
        addexpense:(state,action)=>{
            state.explist.push(action.payload)
        }
    },


})

export const {addexpense}=expenseSlice.actions
export default expenseSlice.reducer;
