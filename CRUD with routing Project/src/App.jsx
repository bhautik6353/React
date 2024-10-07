import React, { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Component/home'
import Create from './Component/Create'
import Update from './Component/Update'
import Delete from './Component/Delete'

export default function App() {
  const [data,setData]=useState([
    {id:1,name:"bhautik",email:"kp@gmail.com",no:4455414554},
    {id:2,name:"trushit",email:"bhautik@gmail.com",no:4455414554},
  ]);

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data}/>} />
        <Route path='/create' element={<Create data={data} setData={setData}/>}></Route>
        <Route path='/update' element={<Update data={data} setData={setData}/>}></Route>
        <Route path='/delete' element={<Delete data={data} setData={setData}/>}></Route>



      </Routes>
      
      </BrowserRouter>
    </div>
  )
}