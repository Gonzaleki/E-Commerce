import React from 'react'
import '../styles/header.css'
import { NavData } from '../data/NavData'

function Header() {
  return (
    <nav className='navbarItems'>
      <h1>
        Tu Tienda <i className="fab fa-react"></i>
      </h1>
      <ul>
        {NavData.map((item, index) => (
          <li key={index}>
            <a href={item.url}
              className={item.class}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Header