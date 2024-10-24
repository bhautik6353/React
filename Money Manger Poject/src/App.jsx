import React from 'react'
import Money from './Money/Money'
import { store } from '../store/Store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Money />
      </Provider>
      
    </div>
  )
}
