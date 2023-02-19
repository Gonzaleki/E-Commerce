const express = require('express')
const mysql = require('mysql2')
const app = express()

app.use(express.json());

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'E-Commerce'
})

connection.connect();

app.get('/api/mydata', (req, res) => {
  connection.query('SELECT * FROM products', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  })
})

app.post('/api/mydata', (req, res) => {
  const {
    id,
    name,
    type,
    subtype,
    price,
    img,
    tendency,
    offer
  } = req.body;

  const query = `INSERT INTO products (id, name, type, subtype, price, img, tendency, offer) VALUES (?, ?, ?, ? ,?,?,?,?)`;
  const values = [id, name, type, subtype, price, img, tendency, offer];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al insertar el objeto en la tabla');
    } else {
      res.status(201).send('Objeto insertado correctamente');
    }
  });
});

app.listen(2000, () => {
  console.log('Puerto exitoso en 2000')
})

