import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create({data,setData}) {
    const navigat=useNavigate()
    const[name,setName]=useState("")
    const[subject,setSubject]=useState("")
    const hendlesubmit=()=>{
        let obj={id:data.length+1,name:name,subject:subject}
        setData([...data,obj])
        navigat("/")
    }

  return (
    <div>
        <center>
            <h1>Create</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/> <br /><br />
            <input type="text" value={subject} onChange={(e)=>setSubject(e.target.value)} placeholder="Enter Subject"/> <br /><br />
            <button onClick={hendlesubmit}>Submit</button>
            
            
        </center>
      
    </div>
  )
}
