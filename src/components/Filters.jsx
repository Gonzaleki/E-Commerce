import React, {useState} from 'react'
import '../styles/shopping-list.css'

export default function Filters() {

    const [minPrice, setMinPrice] = useState()

    const handleChangeMinPrice = (e) => {
        setMinPrice(e.target.value)
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
                <select name="type" id="type" placeholder='Type'>
                    <option hidden selected> -- select --</option>
                    <option value="shirt">Shirt</option>
                    <option value="shirt">Shirt</option>
                    <option value="shirt">Shirt</option>
                    <option value="shirt">Shirt</option>
                </select>
            </div>
            <div className='subtype'>
                <label htmlFor="type">SubType</label>
                <select name="type" id="type" placeholder='Type'>
                    <option hidden selected> -- select --</option>
                    <option value="shirt">Shirt</option>
                    <option value="shirt">Shirt</option>
                    <option value="shirt">Shirt</option>
                    <option value="shirt">Shirt</option>
                </select>
            </div>
            <div>
                <label htmlFor="tendency">Tendency</label>
                <input type="checkbox" name='tendency' />
            </div>
            <div>
                <label htmlFor="offer">Offer</label>
                <input type="checkbox" name='offer' />
            </div>
        </section>
    )
}
