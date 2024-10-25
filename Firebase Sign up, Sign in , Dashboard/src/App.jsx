import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Signup from './Component/Signup'
import Signin from './Component/Signin'
import Deshboard from './Component/Deshboard'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={Signup}></Route>
        <Route path="/signin" Component={Signin}></Route>
        <Route path="/deshboard" Component={Deshboard}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
