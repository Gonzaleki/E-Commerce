import React, { useState, useEffect } from 'react'
import '../styles/header.css'
import { NavData, NavOptions } from '../data/NavData'

function Header() {
  // El estado para determinar si el header se alcanzo para que cambie el menu de static a fixed
  const [headerPosition, setHeaderPosition] = useState('static');
  // El estado para determinar si se activa el dropdown cuando pasa el mouse por arriba
  const [dropdownVisible, setDropdownVisible] = useState(false);

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
    if (window.pageYOffset >= 100) {
      setHeaderPosition('fixed');
    } else {
      setHeaderPosition('static');
    }
  }


  return (
    <div>
      <div className='navbarItems'>
        <h1 className='logo'>
          My Store<i className="fab fa-react"></i>
        </h1>
        <ul className='nav-menu'>
          {NavData.map((item, index) => (
            <li key={index}>
              <a href={item.url}
                className={item.class}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <h1 className='logo'>
          My Store<i className="fab fa-react"></i>
        </h1>
      </div>
      <div className={`navbarItems-option ${headerPosition}`}>

        <ul className='nav-options'>
          {NavOptions.map((item, index) => (
            <li key={index}
              className={item.class}
              onMouseEnter={() => setDropdownVisible(true)} onMouseLeave={() => setDropdownVisible(false)}>
              {item.title}
              <ul className={`dropdown-menu ${dropdownVisible ? 'show' : ''}`}>
                {item.children.map((e, index)=>(
                  <li key={index}
                  className={e.class}>
                    <a href={e.url}>
                    {e.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header