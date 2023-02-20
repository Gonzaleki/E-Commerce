import React, { useContext } from 'react'
import { FetchContext } from '../App'
import '../styles/shopping-list.css'

export default function ProductList() {
  const data = useContext(FetchContext);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  console.log(data);

  return (
    <main>
      <div className="cards">
        {data && data.map(item =>
        (
          <div key={item.id} className='card' onClick={()=>{alert('soon')}}>
            <img src={item.img} alt=''></img>
            <span className='product-details'>
              <h3 style={{ marginBottom: 0 }}>{item.name}</h3>
              <h3 style={{ margin: 3 }}>{formatter.format(item.price)}</h3>
              <button className='add-cart'><i className="fa-sharp fa-solid fa-cart-shopping"></i></button>
            </span>
          </div>
        ))
        }
      </div>
    </main>
  )
}
