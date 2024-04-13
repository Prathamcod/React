import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Register from './components/Registration'
import Profile from './components/Profile'

function App() {


  return (
    <UserContextProvider>
      <h1>My website</h1>
      <Register />
      <Profile />
    </UserContextProvider>
  )
}

export default App
