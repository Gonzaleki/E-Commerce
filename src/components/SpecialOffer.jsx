/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { DataBase } from '../data/Api'
import '../styles/home.css'


export default function SpecialOffer() {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      
    return (
        <div className="home">
            <h1 className="title">Special Offers</h1>
            <hr />
            <div className="cards">
                {DataBase.map((item) => (
                    item.offer ? (
                        <div key={item.id} className='card'>
                            <img src={item.img} alt=''></img>
                            <h3>{item.name}</h3>
                            <h3>{formatter.format(item.price)}</h3>
                        </div>
                    )
                        : null
                )
                )}
            </div>
            <button className='animated-btn'>Show more</button>
        </div>
    )
}
