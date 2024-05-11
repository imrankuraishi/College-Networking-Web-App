import { configureStore } from '@reduxjs/toolkit';
import React from 'react'
import './input.css'
import Main from './Main';
import { authSlice } from './store/slice';
import { Provider } from 'react-redux';
const store = configureStore({

  reducer: authSlice
})

const App = () => {
  return (
    <Provider store={store}>


        <Main />


    </Provider>
  )
}

export default App;