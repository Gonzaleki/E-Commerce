import React from 'react'
import '../styles/home.css'



export default function Discount() {
    return (
        <div className="discount">
            <h2>Get your 20% discount for this SUMMER</h2>
            <button className='animated-btn' onClick={() => { alert('Hola') }}>
                Apply <span>NOW</span> !!
                <i className="fa-sharp fa-solid fa-arrow-right"></i>
            </button>
        </div>
    )
}
