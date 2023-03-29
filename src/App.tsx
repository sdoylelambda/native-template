import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import { Home } from './components/Home'
import { HomeWatch } from './components/HomeWatch'
import { Concierge } from './components/Concierge'
import { RealEstate } from './components/RealEstate'
import { Contact } from './components/Contact'
import { Navbar } from './components/Navbar'
import { CreateUser } from './components/CreateUser'
import { Login } from './components/Login'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/homewatch' element={<HomeWatch />} />
        <Route path='/concierge' element={<Concierge />} />
        <Route path='/realestate' element={<RealEstate />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/createuser' element={<CreateUser />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
