const express = require('express')
const app = express()

app.get('/api', (req, res) => {
  res.json({ users: ['userOne', 'userTwo', 'userThree', 'userFour'] })
})

app.listen(3000, () => {
  console.log('Puerto exitoso en 3000')
})
