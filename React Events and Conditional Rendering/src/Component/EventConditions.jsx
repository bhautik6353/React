import React, { useState } from 'react'

export default function EventConditions() {
    const[isVisible,setIsVisible]=useState(false)
  return (
    <div>
   <center>   <h1>Conditions</h1>
      {
        isVisible ? <h1>hyy</h1>:<h1>bye</h1>
        
      }
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>
      </center>
    </div>
  )
}