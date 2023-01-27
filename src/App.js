import React from "react"
import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header.jsx'
import About from "./components/About"
import Contact from "./components/Contact"
import Locations from "./components/Location"
import Home from "./components/Home"
import ImageSlider from "./components/ImageSlider"


function App() {


  return (
    <>
      <div className="nav-elements">
        <Header />
        <ImageSlider />
      </div>
      <div className='home'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/location' element={<Locations />} />
      </Routes>
      </div>
      
    </>
  )
}

export default App