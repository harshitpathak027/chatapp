import { useEffect, useState } from 'react'
import HomePage from "./pages/HomePage.jsx"
import SignupPage from "./pages/SignUpPage.jsx"
import LoginPage from "./pages/LoginInPage.jsx"
import SettingPage from "./pages/SettingsPage.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"
import './App.css'
import {Loader} from "lucide-react"
import Navbar from './components/Navbar'
import {Toaster} from "react-hot-toast"
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuthStore } from './store/useAuthStore.js'
import { useThemeStore } from './store/useThemeStore.js'

function App() {
  const {authUser,checkAuth,isCheckingAuth} = useAuthStore();
 const {theme} =useThemeStore()
  useEffect(()=>{
    checkAuth();
  },[checkAuth])
  console.log({authUser})
  if(isCheckingAuth && !authUser) return(
    <div className='flex items-center justify-center h-screen'>
      <Loader className="size-10 animate-spin"></Loader>
    </div>
  )
  return (
    <div data-theme={theme}>
     <Navbar/>
      <Routes>
        <Route path='/' element={authUser?<HomePage/>:<Navigate to="/login"/>}></Route>
        <Route path='/signup' element={!authUser?<SignupPage/>:<Navigate to="/"/>}></Route>
        <Route path='/login' element={!authUser?<LoginPage/>:<Navigate to="/"/>}></Route>
        <Route path='/settings' element={authUser?<SettingPage/>:<Navigate to="/login"/>}></Route>
        <Route path='/profile' element={authUser?<ProfilePage/>:<Navigate to="/login"/>}></Route>
      </Routes>
     <Toaster/>
    </div>
  )
}

export default App
