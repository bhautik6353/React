import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Signup from './Component/Signup'
import Signin from './Component/Signin'
import Dashboard from './Component/Dashboard'

export default function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>

      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}
