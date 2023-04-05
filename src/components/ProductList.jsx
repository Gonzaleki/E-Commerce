import React, {useState, useEffect} from 'react'
import '../styles/shopping-list.css'

export default function ProductList({products, price, type, subtype, tendency, offer}) {

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let filtered = products;

    if (price) {
      filtered = filtered.filter((product) => product.price <= price);
    }

    if (type) {
      filtered = filtered.filter((product) => product.type === type);
    }

    if (subtype) {
      filtered = filtered.filter((product) => product.subtype === subtype);
    }
    if (tendency) {
      filtered = filtered.filter((product) => product.tendency === tendency);
    }
    if (offer) {
      filtered = filtered.filter((product) => product.offer === offer);
    }

    setFilteredProducts(filtered);

  }, [products, price, type, subtype, tendency, offer]);
 
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <main>
      <div className="cards-list">
        {filteredProducts && filteredProducts.map(item =>
        (
          <div key={item.id} className='card-list' onClick={()=>{alert('soon')}}>
            <img className='card-img' src={item.img} alt=''></img>
            <span className='product-details'>
              <h3 style={{ marginBottom: 0 }}>{item.name}</h3>
              <h3 style={{ margin: 3 }}>{formatter.format(item.price)}</h3>
              <button className='add'><i className="fa-sharp fa-solid fa-cart-shopping"></i></button>
            </span>
          </div>
        ))
        }
      </div>
    </main>
  )
}
