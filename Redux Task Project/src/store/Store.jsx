import { configureStore } from "@reduxjs/toolkit";
import user  from "../slice/Slice";

export const store=configureStore({
   reducer:{
    userkey: user
   }
})

