import { configureStore } from "@reduxjs/toolkit";
import Api  from "../slice/Slice";

export const store=configureStore({
    reducer:{
        userkey: Api
        }
})