import React, { useContext } from 'react'
import '../styles/shopping-list.css';
import ProductList from './ProductList';
import Filters from './Filters';
import { FetchContext } from '../App'
import useFilter from '../hooks/useFilter'

export default function Hola() {
  const data = useContext(FetchContext);
  let {price, setPrice, type, setType, subtype, setSubtype, tendency, setTendency, offer, setOffer} = useFilter()

  const handleFilter = (price, type, subtype, tendency, offer) => {
    setPrice(price);
    setType(type);
    setSubtype(subtype);
    setTendency(tendency);
    setOffer(offer);
  };

  return (
    <main className='list-products'>
      <h2>Our Products</h2>
      <hr />
      <Filters onFilter={handleFilter}  />
      <ProductList
       products={data}
       price={price}
       type={type} 
       subtype={subtype} 
       tendency={tendency} 
       offer={offer}  />
    </main>
  )
}
