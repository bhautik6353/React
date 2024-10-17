import { createSlice } from "@reduxjs/toolkit";

export const user=createSlice({
    name:'suser',
    initialState:{
        user:[],
    }
    ,
    reducers:{
        adduser:(state,action)=>{
            state.user.push(action.payload);
        },
        deleteuser:(state,action)=>{
            state.user=state.user.filter((user)=>user.id!==action.payload);
        },
        UpdateData:(state,action)=>{
            state.user.map((e)=>{
                if(e.id == action.payload.id){
                    e.name = action.payload.name
                    e.email = action.payload.email
                    e.gender = action.payload.gender
                    e.task = action.payload.task
                    e.prio = action.payload.prio
            }else{
                e
            }
            })
            }

    }
})

export const{adduser,deleteuser,UpdateData}=user.actions
export default user.reducer