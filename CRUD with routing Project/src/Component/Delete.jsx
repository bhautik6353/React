import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Delete({data,setData}) {
    const navigate=useNavigate()
    const[id,setId]=useState("")
    const handledelete=()=>{
        let deletdata=data.filter((item)=>item.id!=id)
        setData(deletdata)
        navigate("/")

    }
  return (
    <div>
        <center>
            <h1>Delete</h1>
            <input type="text" placeholder='Enter Id' onChange={(e)=>setId(e.target.value)}/> <br />
            <button onClick={handledelete}>Delete</button>


        </center>
      
    </div>
  )
}