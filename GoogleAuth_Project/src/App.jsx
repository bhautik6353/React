import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Wcpage from './firebase/Wcpage'
import Googleauth from './firebase/Googleauth'

export default function App() {
  return (
    <div>
            <BrowserRouter>
      <Routes>
        <Route path='/' element={<Googleauth/>}></Route>
        <Route path="/wcpage" element={<Wcpage/>}></Route>


      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}
