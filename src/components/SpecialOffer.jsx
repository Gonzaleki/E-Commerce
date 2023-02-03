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
                            <span className='card__inner'>
                                <h3 style={{marginBottom: 0}}>{item.name}</h3>
                                <h3 style={{marginTop: 0}}>{formatter.format(item.price)}</h3>
                                <button className='add-cart'>Add To Cart <i className="fa-sharp fa-solid fa-cart-shopping"></i></button>
                            </span>
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
