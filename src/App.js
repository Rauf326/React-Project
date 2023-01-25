import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (


    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App