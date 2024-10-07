import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create({data,setData}) {
    const navigat=useNavigate()
    const[name,setName]=useState("")
    const[email,setemail]=useState("")
    const[no,setNo]=useState("");
    const hendlesubmit=()=>{
        let obj={id:data.length+1,name:name,email:email,no:no}
        setData([...data,obj])
        navigat("/")
    }

  return (
    <div>
        <center>
            <h1>Create</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/> <br /><br />
            <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter email"/> <br /><br />
            <input type="text" value={no} onChange={(e)=>setNo(e.target.value)} placeholder="Enter number"/> <br /><br />
            
            <button onClick={hendlesubmit}>Submit</button>
            
            
        </center>
      
    </div>
  )
}