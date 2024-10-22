import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchapi=createAsyncThunk("fetchapi",async()=>{
    let response=await axios.get("https://fakestoreapi.com/products")
    let res=response.data
    return res
})




export const Api=createSlice({
    name:'api',
    initialState:{data:[],loading:true},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchapi.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(fetchapi.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
            })




        }
    })

    export default Api.reducer

