import React from 'react'
import '../styles/home.css'

export default function Footer() {
    return (
        <footer>
            <h3>Este es el footer</h3>
            <div className="links">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-tiktok"></i>
                <i className="fab fa-twitter"></i>
            </div>
            <h3 className='logo'>
                My Store<i className="fab fa-react"></i>
            </h3>
        </footer>
    )
}
