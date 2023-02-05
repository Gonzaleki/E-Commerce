import React from 'react'
import '../styles/home.css'

export default function Services() {
    return (
        <div className="services">
            <div>
                <i className="fa-sharp fa-solid fa-truck-fast"></i>
                <p>We have free shiping for our oldest clients</p>
            </div>
            <div>
                <i className="fa-sharp fa-solid fa-city"></i>
                <p>Now we reach all major cities in USA</p>
            </div>
            <div>
                <i className="fa-sharp fa-solid fa-headset"></i>
                <p>Full assitance 24/7 by every channel</p>
            </div>
            <div>
                <i className="fa-solid fa-users-line"></i>
                <p>Our community keeps growing every day</p>
            </div>
        </div>
    )
}
