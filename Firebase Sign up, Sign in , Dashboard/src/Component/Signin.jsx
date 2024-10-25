import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig'
import {useNavigate } from 'react-router-dom'

export default function Signin() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()

    const handlesignin=async()=>{
        let user=await signInWithEmailAndPassword(auth,email,password)
        console.log(user)
        if(user){
            navigate('/deshboard')

        }

    }

  return (
    <div className='signup-container'>
      <center>
        <h1>Sign In</h1>
        <input className="input-field" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
        <br/>
        <input className="input-field" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
        <br/>
        <button className="signup-button" onClick={handlesignin}>Sign Up</button>
        
        



      </center>
      
    </div>
  )
}
