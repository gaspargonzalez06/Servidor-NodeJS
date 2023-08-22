const express = require('express')
const app = express()
const port = 4000;

app.get('/', (req, res) => {
 
  res.send('<h1>hola mundo con express y node</h1>' + '<h1>hola mundo con express y node</h1>');


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})