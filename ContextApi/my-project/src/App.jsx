import { useState } from 'react'

import './App.css'
import UserContext from './Context/UserContext'
import UserContextProvider from './Context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
  
  return (
    <>
     <UserContextProvider>
  
          <Login></Login>
          <Profile></Profile>
         

     </UserContextProvider>
    </>
  )
}

export default App
