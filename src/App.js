import React, { useState, useRef, useEffect } from "react"
import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header.jsx'
import About from "./components/About"
import Contact from "./components/Contact"
import Locations from "./components/Location"
import Home from "./components/Home"
import Products from "./components/Products"


function App() {
  const cartRef = useRef(null)
  const [aboveNav, setAboveNav] = useState(false);

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/mydata')
    .then(res=> res.json())
    .then(res => setData(res))
    .catch(error => console.error(error));
    }, []);

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
        <FetchContext.Provider value={data}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/location' element={<Locations />} />
        </Routes>
        </FetchContext.Provider>
      </div>

    </>
  )
}

export default App

export const FetchContext = React.createContext();