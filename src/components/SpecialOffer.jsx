import React from 'react'
import '../styles/home.css'


export default function SpecialOffer() {
    return (
        <div className="home">
            <h1 className="title">Special Offers</h1>
            <hr />
            <div className="cards">
                <div className="card">
                    Esta carta es una prueba
                </div>
                <div className="card">
                    Esta carta es una prueba
                </div>
                <div className="card">
                    Esta carta es una prueba
                </div>
            </div>
            <button className='animated-btn'>Show more</button>
        </div>
    )
}
