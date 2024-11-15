
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Firebase/Signup'
import Dashboard from './Firebase/Dashboard'
import Signin from './Firebase/Signin'

export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}