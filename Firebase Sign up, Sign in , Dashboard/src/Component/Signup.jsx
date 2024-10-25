import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { Link,useNavigate } from 'react-router-dom'

export default function Signup() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()
    

    const handlesignup=async()=>{
        let user=await createUserWithEmailAndPassword(auth,email,password)
        console.log(user)
        if(user){
            alert("User created successfully")
            navigate('/deshboard')
        }

    }
  return (
    <div className='signup-container'>
      <center>
        <h1>Signup</h1>
        <input className="input-field" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
        <br/>
        <input className="input-field" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
        <br/>
        <button className="signup-button" onClick={handlesignup}>Sign Up</button>
        <p><Link to={"/signin"}>Sign In</Link></p>
        



      </center>
    </div>
  )
}
