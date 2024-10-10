import { configureStore } from "@reduxjs/toolkit";
import counter  from "../slice/Slice";

export const store=configureStore({
    reducer:{
        Counterkey:counter

    }
})