/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import '../styles/home.css'


export default function SpecialOffer(props) {
    const [page, setPage] = useState(0)
    const itemsPerPage = 3




    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    if (props.products == null) {
        return console.log('no hay')
    }

    let currentOffers = props.products.filter(e => e.offer)

    const currentItems = currentOffers.slice(0, page * itemsPerPage + itemsPerPage)
    const handleShowMore = () => {
        setPage(page + 1);
    };



    return (
        <div className="home">
            <h1 className="title">Special Offers</h1>
            <hr />
            <div className="cards">
                {currentItems.map((item) => (

                    <div key={item.id} className='card'>
                        <img src={item.img} alt=''></img>
                        <span className='card__inner'>
                            <h3 style={{ marginBottom: 0 }}>{item.name}</h3>
                            <h3 style={{ margin: 3 }}>{formatter.format(item.price)}</h3>
                            <button className='add-cart'>ADD TO CART <i className="fa-sharp fa-solid fa-cart-shopping"></i></button>
                        </span>
                    </div>

                )
                )}
            </div>
            {page * itemsPerPage + itemsPerPage < currentOffers.length && (
                <button className='animated-btn' onClick={handleShowMore}>SHOW MORE</button>
            )}
        </div>
    )
}
