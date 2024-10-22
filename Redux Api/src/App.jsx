import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/Store'
import Reduxapi from './component/Reduxapi'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Reduxapi/>
      </Provider>
    </div>
  )
}
