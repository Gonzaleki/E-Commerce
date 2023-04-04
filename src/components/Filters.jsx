import React, { useState } from 'react'
import '../styles/shopping-list.css'
import { NavOptions } from '../data/NavData'

export default function Filters() {

    const [minPrice, setMinPrice] = useState()
    const [selectedValue, setSelectedValue] = useState('');

    const handleChangeMinPrice = (e) => {
        setMinPrice(e.target.value)
    }
    const handleChangeValue = (e) => {
        setSelectedValue(e.target.value)
    }


    return (
        <section className='filter-panel'>
            <div className='price'>
                <label htmlFor='price'>Price</label>
                <input type="range" name="price" min='0' max='100' onChange={handleChangeMinPrice} />
                <span>${minPrice}</span>
            </div>
            <div className='type'>
                <label htmlFor="type">Type</label>
                <select name="type" id="type" onChange={handleChangeValue} placeholder='Type'>
                    <option hidden selected> -- select --</option>
                    {NavOptions.map((e) => {
                        return <option key={e.title} value={e.title}>{e.title}</option>
                    })}
                </select>
            </div>
            <div className='subtype'>
                <label htmlFor="type">SubType</label>

                {selectedValue === 'Shirts' ? (
                    <select name="type" id="type" placeholder='Type'>
                        <option hidden selected> -- select --</option>
                        {NavOptions[0].children.map((e) => {
                            return <option key={e.title} value={e.title}>{e.title}</option>
                        })}
                    </select>
                ) :
                    selectedValue === 'Sweters' ? (
                        <select name="type" id="type" placeholder='Type'>
                            <option hidden selected> -- select --</option>
                            {NavOptions[1].children.map((e) => {
                                return <option key={e.title} value={e.title}>{e.title}</option>
                            })}
                        </select>
                    ) :
                        selectedValue === 'Jeans' ? (
                            <select name="type" id="type" placeholder='Type'>
                                <option hidden selected> -- select --</option>
                                {NavOptions[2].children.map((e) => {
                                    return <option key={e.title} value={e.title}>{e.title}</option>
                                })}
                            </select>
                        ) :
                            selectedValue === 'Pants' ? (
                                <select name="type" id="type" placeholder='Type'>
                                    <option hidden selected> -- select --</option>
                                    {NavOptions[3].children.map((e) => {
                                        return <option key={e.title} value={e.title}>{e.title}</option>
                                    })}
                                </select>
                            ) :
                                selectedValue === 'Shorts' ? (
                                    <select name="type" id="type" placeholder='Type'>
                                        <option hidden selected> -- select --</option>
                                        {NavOptions[1].children.map((e) => {
                                            return <option key={e.title} value={e.title}>{e.title}</option>
                                        })}
                                    </select>
                                )
                                    : (<></>)
                }

            </div>
            <div>
                <label htmlFor="tendency">Tendency</label>
                <input type="checkbox" name='tendency' />
            </div>
            <div>
                <label htmlFor="offer">Offer</label>
                <input type="checkbox" name='offer' />
            </div>
            <div>
                <button >
                    Limpiar
                </button>
            </div>
        </section>
    )
}
