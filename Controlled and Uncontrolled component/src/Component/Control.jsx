// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

export default function Control() {
    // eslint-disable-next-line no-unused-vars
    const  [name , setName]=useState("")
    const handleChange = (e) =>{
    console.log(e.target.value) ; 
    } 
    return (
        <>
<h1>Controlled Component</h1>
<input type='text' placeholder='Enter Name' onChange={(e)=>handleChange(e)} />
</>
)
}