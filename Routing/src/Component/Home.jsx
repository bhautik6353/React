import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Home() {
    let data="5454544";
    let location=useLocation()

  return (
    <div>
      <center>
        <h1>Home</h1>
        <h1>{location.state?.name}</h1>
        <Link to={`/About`}>About</Link>
        <Link to={`/Contact/${data}`}>Contact</Link>
      </center>
    </div>
  )
}
