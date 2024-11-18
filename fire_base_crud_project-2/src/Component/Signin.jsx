import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseconfige'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate()
    const handleAdd = ()=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(user=>{
            console.log(user.user.uid);
            navigate('/dashboard')
        })
    }

  return (
    <div>
            <center>
        <h1>Sign-in</h1> <br /><br />
        <input type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} /> <br /><br />
        <input type="text" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} /> <br /><br /> 
        <button onClick={handleAdd}>Login</button> <br /><br />
        <Link to={'/'} style={{fontSize:"20px"}}>Sign up</Link>

    </center>

      
    </div>
  )
}
