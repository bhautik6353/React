import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { store } from '../App/store'
import All from './Component/All'
import Men from './Component/Men'
import Jewelery from './Component/Jewelery'
import Electronic from './Component/Electronic'
import Women from './Component/Women'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <div>
  <BrowserRouter>
  <Provider store={store}>
  <Routes>
  <Route path='/' element={<All/>}></Route>
  <Route path='/Men' element={<Men/>}></Route>
  <Route path='/Jewelery' element={<Jewelery/>}></Route>
  <Route path='/Electronic' element={<Electronic/>}></Route>
  <Route path='/Women' element={<Women/>}></Route>
  </Routes>
  </Provider>
  </BrowserRouter>
    </div>
  )
}
