import React from 'react'
import '../styles/shopping-list.css';
import ProductList from './ProductList';
import Filters from './Filters';

export default function Hola() {
  return (
    <main className='list-products'>
      <h2>List of Products</h2>
      <hr />
      <Filters />
      <ProductList />
    </main>
  )
}
