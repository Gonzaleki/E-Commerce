/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../styles/home.css'


export default function SpecialOffer(props) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    if (props.products == null) {
        return console.log('no hay')
    }

    return (
        <div className="home">
            <h1 className="title">Special Offers</h1>
            <hr />
            <div className="cards">
                {props.products.map((item) => (
                    item.offer ? (
                        <div key={item.id} className='card'>
                            <img src={item.img} alt=''></img>
                            <span className='card__inner'>
                                <h3 style={{marginBottom: 0}}>{item.name}</h3>
                                <h3 style={{margin: 3}}>{formatter.format(item.price)}</h3>
                                <button className='add-cart'>ADD TO CART <i className="fa-sharp fa-solid fa-cart-shopping"></i></button>
                            </span>
                        </div>
                    )
                        : null
                )
                )}
            </div>
            <button className='animated-btn'>SHOW MORE</button>
        </div>
    )
}
