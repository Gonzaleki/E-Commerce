import React from 'react'
import '../styles/home.css'

export default function Footer() {
    return (
        <footer>
            <div className='terms'>
                <span>Policy </span> | <span> Terms of Service </span>
                <div className='copyright'>@copyright Gonzaleki</div>
            </div>
            <div className="links">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-tiktok"></i>
                <i className="fab fa-twitter"></i>
            </div>
            <h2 className='logo'>
                My Store<i className="fab fa-react"></i>
            </h2>
        </footer>
    )
}
