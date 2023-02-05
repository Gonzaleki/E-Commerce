import React from 'react'
import '../styles/home.css'
import { DataBase } from '../data/Api'

export default function Tendency() {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <div className="home">
            <h1 className="title">Tendency</h1>
            <hr />
            <div className="cards">
                {DataBase.map((item) => (
                    item.tendency ? (
                        <div key={item.id} className='card'>
                            <img src={item.img} alt=''></img>
                            <span className='card__inner'>
                                <h3 style={{marginBottom: 0}}>{item.name}</h3>
                                <h3 style={{marginTop: 0}}>{formatter.format(item.price)}</h3>
                                <button className='add-cart'>ADD TO CART <i className="fa-sharp fa-solid fa-cart-shopping"></i></button>
                            </span>
                        </div>
                    )
                        : null
                )
                )}
            </div>

        </div>
    )
}
