import { useState } from 'react'
import HomePage from "./pages/HomePage.jsx"
import SignupPage from "./pages/SignUpPage.jsx"
import LoginPage from "./pages/LoginInPage.jsx"
import SettingPage from "./pages/SettingsPage.jsx"
import profilePage from "./pages/ProfilePage.jsx"
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/settings' element={<SettingPage/>}></Route>
        <Route path='/profile' element={<profilePage/>}></Route>
      </Routes>
     
    </>
  )
}

export default App
