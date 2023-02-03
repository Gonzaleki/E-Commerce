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
                            <h3>{item.name}</h3>
                            <h3>{formatter.format(item.price)}</h3>
                        </div>
                    )
                        : null
                )
                )}
            </div>
            
        </div>
    )
}
