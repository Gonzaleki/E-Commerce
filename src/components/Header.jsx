import React, { useState, useEffect } from 'react'
import '../styles/header.css'
import Nav from './Nav'
import Menu from './Menu';

function Header() {
  // El estado para determinar si el header se alcanzo para que cambie el menu de static a fixed
  const [headerPosition, setHeaderPosition] = useState('static');

  // Detectamos el scroll, y activamos el handleScoll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // el handlescroll se fija ei el pageYOffset llego a 100 o mas, para asi cambiar 
  // el estado del header a fixed o si es menor a static
  const handleScroll = () => {
    if (window.pageYOffset > 159) {
      setHeaderPosition('fixed');
    } else {
      setHeaderPosition('static');
    }
  }
  

  return (
    <>
      <div className='header'>
        <Nav />
      </div>
      <hr />
      <div className={`menu ${headerPosition}`}>
        <Menu />
      </div>
    </>
  )
}

export default Header