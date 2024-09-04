import React, { useEffect, useState } from 'react'

export default function Useffect3() {
  const[count,setCount]=useState(0)
  useEffect(()=>{
   return console.log("useEffect is called");
  })

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
