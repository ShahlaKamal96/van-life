import React from 'react'
import Home from "./components/pages/Home"
import Navbar from "./components/Navbar"
import About from './components/pages/About';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
