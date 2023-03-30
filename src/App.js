import React from 'react'
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import About from './pages/About';
import Vans from "./pages/Vans"
import Footer from './components/Footer';
import VanDetails from './pages/VanDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
