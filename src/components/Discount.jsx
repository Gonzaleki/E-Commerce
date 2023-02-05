import React from 'react'
import '../styles/home.css'



export default function Discount() {
    return (
        <div className="discount">
            <h3>SHOP ONLINE & IN-STORE</h3>
            <h2>GET YOUR 20% OFF THIS SUMMER</h2>
            <button className='animated-btn' onClick={() => { alert('Hola') }}>
                APPLY NOW !
                <i className="fa-sharp fa-solid fa-arrow-right"></i>
            </button>
        </div>
    )
}
