import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Contact() {
  const param=useParams()
  return (
    <div>
      <center>
        <h1>Contact Us</h1>
        <p>Phone: {param.phone}</p>
        <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
      </center>
    </div>
  )
}
