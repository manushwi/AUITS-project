import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MyAppointements from './pages/MyAppointements'
import Profile from './pages/Profile'
import Blog from './pages/Blog'
import About from './pages/About'
import Login from './pages/Login'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GovernmentSubsidies from './pages/GovernmentSubsidies'
import Process from './pages/Process'
import WhatWeOffer from './pages/WhatWeOffer'
import Cart from './pages/Cart'
import AdminDashboard from './pages/AdminDashboard'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/Blog' element={<Blog />}  />
        <Route path='/About' element={<About />}  />
        <Route path='/Login' element={<Login />}  />
        <Route path='/Process' element={<Process />}  />
        <Route path="/GovernmentSubsidies" element={<GovernmentSubsidies />} />
        <Route path='/MyAppointments' element={<MyAppointements />}  />
        <Route path='/Profile' element={<Profile />}  />
        <Route path='/Products' element={<Products />}  />
        <Route path='/Cart' element={<Cart />}  />
        <Route path='/WhatWeOffer' element={<WhatWeOffer />}  />
        <Route path='/AdminDashboard' element={<AdminDashboard />}  />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App