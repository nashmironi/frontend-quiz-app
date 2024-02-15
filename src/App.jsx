import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './reset.css'
import data from "./data.json"
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Home_module from './views/Home.module.css'

function App() {
  

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      
     </Routes>
    </>
  )
}

export default App
