import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/Store'
import Reduxpro from './redux/Reduxpro'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Reduxpro/>

      </Provider>
    </div>
  )
}
