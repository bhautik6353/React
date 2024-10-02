import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from './Component/Contact'




export default function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
<Route  path='/' element={<Home/>}></Route>
<Route path="/About" element={<About/>}></Route>
<Route path='/Contact/:phone' element={<Contact/>}></Route>
</Routes>

</BrowserRouter>
    </div>
  )
}
