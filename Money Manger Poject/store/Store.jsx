import { configureStore } from "@reduxjs/toolkit";
import budgetSlice  from "../slice/Deposite";
import  expenseSlice  from "../slice/Expense";


export const store=configureStore({
  reducer:{
    depositkey:budgetSlice,
    expensekey:expenseSlice,
  }
})


