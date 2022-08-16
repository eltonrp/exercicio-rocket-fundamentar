const express = require('express')
const app = express()

//seta o express oque vai renderizar o js
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('pages/index')
})

app.get('/about', function(req, res) {
  res.render('pages/about')
})

app.get('/services', function(req, res) {
  res.render('pages/services')
})

app.listen(8080)
console.log('Servidor rodando em localhost:8080')