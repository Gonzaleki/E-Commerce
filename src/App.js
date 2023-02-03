import React, { useState, useEffect} from "react"
import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header.jsx'
import About from "./components/About"
import Contact from "./components/Contact"
import Locations from "./components/Location"
import Home from "./components/Home"


function App() {
  const [cartColor, setCartColor] = useState({
    background: 'white',
    color: '#4e4e4e'
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 128) {
      setCartColor({
        background: '#3e138d',
        color: 'white'
      });
    } else {
      setCartColor({
        background: 'white',
        color: '#3e138d'
      });
    }
  }

  

  return (
    <>
      <button className="cart"
        style={cartColor}>
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