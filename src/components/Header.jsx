import React from 'react'
import '../styles/header.css'
import { NavData } from '../data/NavData'

function Header() {
  return (
    <nav className='navbarItems'>
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
    </nav>
  )
}

export default Header