// src/App.jsx
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
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
import UserDashboard from './pages/UserDashboard'
import ChatbotComponent from './components/chatbot/ChatbotComponent'
import { ChatbotProvider } from './context/ChatbotContext'
import Payment from './pages/Payment'

const App = () => {
  const location = useLocation();
    
  // Define routes where navbar should be hidden
  const hideNavbarRoutes = ['/UserDashboard', '/AdminDashboard'];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);
  
  // Define routes where chatbot should be hidden
  const hideChatbotRoutes = ['/AdminDashboard'];
  const shouldShowChatbot = !hideChatbotRoutes.includes(location.pathname);

  return (
    <ChatbotProvider>
      <div className='mx-4 sm:mx-[10%]'>
        {shouldShowNavbar && <Navbar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/About' element={<About />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Process' element={<Process />} />
          <Route path="/GovernmentSubsidies" element={<GovernmentSubsidies />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/WhatWeOffer' element={<WhatWeOffer />} />
          <Route path='/AdminDashboard' element={<AdminDashboard />} />
          <Route path='/UserDashboard' element={<UserDashboard />} />
          <Route path='/Payment' element={<Payment />} />
        </Routes>
        <Footer />
        {shouldShowChatbot && <ChatbotComponent />}
      </div>
    </ChatbotProvider>
  )
}

export default App