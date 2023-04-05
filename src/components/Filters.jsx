import React from 'react'
import '../styles/shopping-list.css'
import { NavOptions } from '../data/NavData'
import useFilter from '../hooks/useFilter'

export default function Filters({onFilter}) {

    const {price, setPrice, type, setType, subtype, setSubtype, tendency, setTendency, offer, setOffer} = useFilter()

    const handleChangeMinPrice = (e) => {
        setPrice(e.target.value)
    }
    const handleTypeChangeValue = (e) => {
        setType(e.target.value)
        setSubtype()
    }
    const handleSubtypeChangeValue = (e) => {
        setSubtype(e.target.value)
    }

    const handleTendencyChangeValue = (e) => {
        e.target.value === 'on' ? 
        setTendency(1):<></>

        tendency === 1 ?
        setTendency(0) :
        setTendency(1)
    }

    const handleOfferChangeValue = (e) => {
        e.target.value === 'on' ? 
        setOffer(1):<></>

        offer === 1 ?
        setOffer(0) :
        setOffer(1)
    }

    const handleClean = () => {
        onFilter('', '', '', 0, 0)
    }



    return (
        <section className='filter-panel'>
            <div className='price'>
                <label htmlFor='price'>Price</label>
                <input type="range" name="price" min='0' max='100' onChange={handleChangeMinPrice} />
                <span>${price}</span>
            </div>
            <div className='type'>
                <label htmlFor="type">Type</label>
                <select name="type" id="type" onChange={handleTypeChangeValue} placeholder='Type'>
                    <option hidden selected> -- select --</option>
                    {NavOptions.map((e) => {
                        return <option key={e.title} value={e.title}>{e.title}</option>
                    })}
                </select>
            </div>
            <div className='subtype'>
                <label htmlFor="subtype">SubType</label>

                {type === 'Shirts' ? (
                    <select name="subtype" id="subtype" onChange={handleSubtypeChangeValue} placeholder='SubType'>
                        <option hidden selected> -- select --</option>
                        {NavOptions[0].children.map((e) => {
                            return <option key={e.title} value={e.title}>{e.title}</option>
                        })}
                    </select>
                ) :
                    type === 'Sweters' ? (
                        <select name="subtype" id="subtype" onChange={handleSubtypeChangeValue} placeholder='SubType'>
                            <option hidden selected> -- select --</option>
                            {NavOptions[1].children.map((e) => {
                                return <option key={e.title} value={e.title}>{e.title}</option>
                            })}
                        </select>
                    ) :
                        type === 'Jeans' ? (
                            <select name="subtype" id="subtype" onChange={handleSubtypeChangeValue} placeholder='SubType'>
                                <option hidden selected> -- select --</option>
                                {NavOptions[2].children.map((e) => {
                                    return <option key={e.title} value={e.title}>{e.title}</option>
                                })}
                            </select>
                        ) :
                            type === 'Pants' ? (
                                <select name="subtype" id="subtype" onChange={handleSubtypeChangeValue} placeholder='SubType'>
                                    <option hidden selected> -- select --</option>
                                    {NavOptions[3].children.map((e) => {
                                        return <option key={e.title} value={e.title}>{e.title}</option>
                                    })}
                                </select>
                            ) :
                                type === 'Shorts' ? (
                                    <select name="subtype" id="subtype" onChange={handleSubtypeChangeValue} placeholder='SubType'>
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
                <input type="checkbox" onChange={handleTendencyChangeValue} name='tendency' value={tendency} />
            </div>
            <div>
                <label htmlFor="offer">Offer</label>
                <input type="checkbox"onChange={handleOfferChangeValue}  name='offer' />
            </div>
            <div>
                <button  onClick={() => onFilter(price, type, subtype, tendency, offer)} >
                    Filtrar
                </button>
                
            </div>
            <div>
            <button onClick={()=> handleClean()}>
                    Limpiar
                </button>
            </div>
        </section>
    ) 
}
