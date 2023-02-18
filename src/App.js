import React, { useState, useRef, useEffect } from "react"
import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header.jsx'
import About from "./components/About"
import Contact from "./components/Contact"
import Locations from "./components/Location"
import Home from "./components/Home"


function App() {
  const cartRef = useRef(null)
  const [aboveNav, setAboveNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.pageYOffset;
      const isAbove = pageYOffset > 128;
      if (isAbove !== aboveNav) {
        setAboveNav(isAbove);
    }
  };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [aboveNav]);

  const cartStyle = aboveNav ? {
    background: '#3e138d',
    color: 'white'
  } :
  {
    background: 'white',
    color: '#3e138d'
  }

  console.log('render')

  return (
    <>
      <button ref={cartRef} className="cart"
        style={cartStyle}>
        <i className="fa-sharp fa-solid fa-cart-shopping"></i>
      </button>

      <div className="nav-elements">
        <Header />
      </div>

      <div>
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