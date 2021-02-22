const express = require('express')
const app = express()
const port = 3000
var path=require('path')


app.get('/', (req, res) => {
  res.send('Hello World!')

})


app.get('/beranda', (req, res) => {
   // res.send('Anda di halaman Beranda!')
res.sendFile(path.join(__dirname + '/beranda.html'));

  })


  app.get('/contact', (req, res) => {
    res.send('Anda di halaman Contact!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})