import { signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, provider } from '../../firebaseconfing'
import { useNavigate } from 'react-router-dom'

export default function Googleauth() {

       const navigate=useNavigate()
       const [email, setEmail] = useState("")
       const [password, setPassword] = useState("")
       const [user,setUser]=useState("")
    const handlelogin=async ()=>{
        await signInWithPopup(auth, provider)
        
        .then((result) => {
          let displayname=result.user.displayName
            setUser(displayname)
            console.log(displayname)
            navigate("/wcpage",{state:{displayname:displayname}})  
        })
      

    }
  return (
    <div className='googleauth'>
      <center>

      <div class="auth-container">
    <h1>Google Auth</h1>

    <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} class="auth-input" /><br /><br />
    <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} class="auth-input" /><br /><br />
    <button class="auth-button">Login</button><br /><br />
    <span><hr />or <hr /></span>
   <button onClick={handlelogin} class="google-button">Login with Google</button>
</div>


<br /><br /><br /><br /><br /><br />


      </center>
    </div>
  )
}
