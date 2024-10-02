import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
export default function About() {
    const home=useNavigate()
    const contact=useNavigate()
    
    const handlebtn=()=>{
        home('/' , {state:{name:"student"}})
    }
    const handlecontact=()=>{
      contact('/Contact')
    }
  return (
    <div>
      <center>
        <h1>About Us</h1>
        
        <button onClick={handlebtn}>Go To Home</button>
        <Link to={"/"}>Home</Link>
        <button onClick={handlecontact}>Contact</button>



      </center>
    </div>
  )
}
