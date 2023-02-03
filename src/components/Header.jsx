import React, { useState, useEffect } from 'react'
import '../styles/header.css'
import Nav from './Nav'
import Menu from './Menu';

function Header() {
  const [headerPosition, setHeaderPosition] = useState('static');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 155) {
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
      <div className='menu static'>
        <Menu />
      </div>
      {window.pageYOffset > 155 ? (
        <div className={`menu ${headerPosition}`}>
        <Menu />
      </div>
      ):<></>}
    </>
  )
}

export default Header