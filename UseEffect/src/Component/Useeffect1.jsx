import React, { useEffect, useState } from 'react'

export default function Useffect1() {
  const[count,setCount]=useState(0)
  useEffect(()=>{
   console.log("useEffect is called");
  },[])

  return (
    <div>
     <center> 
      
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Add</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>

      </center>
    </div>
  )
}
