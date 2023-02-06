const express = require('express')
const app = express()

app.use(express.json());

app.get('/api/dataBase', (req, res)=>{
  res.json(dataBase)
})


app.post('/api/dataBase', (req,res)=>{
  const newProduct = {
    id: dataBase.length + 1,
    name: req.body.name,
    type: req.body.type,
    subtype: req.body.subtype,
    price: req.body.price,
    img: req.body.img,
    tendency: req.body.tendency,
    offer: req.body.offer,
  };
  dataBase.push(newProduct);
  res.status(201).send(newProduct);
  res.status(201).send(dataBase);
  return
})
app.listen(2000, () => {
  console.log('Puerto exitoso en 2000')
})




let dataBase = [

  {
      id: 1,
      name: 'T-Shirt XL',
      type: 'Shirts',
      subtype: 'T-Shirt',
      price: 30,
      img: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/190855cd24864f40b379af6b00f9d5e2_9366/remera-argentina-campeon-2022.jpg',
      tendency: false,
      offer: true
  },
  {
      id: 2,
      name: 'T-Shirt XXL',
      type: 'Shirts',
      subtype: 'T-Shirt',
      price: 28,
      img: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/78a2fec757e24cb3afb8ae9700d80dd6_9366/remera-oversized.jpg',
      tendency: true,
      offer: false
  },
  {
      id: 3,
      name: 'T-Shirt M',
      type: 'Shirts',
      subtype: 'T-Shirt',
      price: 33,
      img: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/867d720fa9054348aa1cae7500e9a146_9366/remera-estampada-river-plate.jpg',
      tendency: true,
      offer: false
  },
  {
      id: 4,
      name: 'T-Shirt S',
      type: 'Shirts',
      subtype: 'T-Shirt',
      price: 22,
      img: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/6c940ca740c34cdf85aeae8500bd8626_9366/remera-designed-for-training.jpg',
      tendency: false,
      offer: true
  },
  {
      id: 5,
      name: 'Jean 43',
      type: 'Jeans',
      subtype: 'Fit',
      price: 18,
      img: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/72d1581a080f44fab2a1ae0d01030142_9366/pantalon-adicolor-classics-firebird-primeblue.jpg',
      tendency: false,
      offer: false
  },

]