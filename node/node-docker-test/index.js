const express = require('express')
const app = express()

app.get('/', function(req,res) {
        res.send('Hello World from docker container')
})

app.listen(3000)
console.log('Servidor rodando em localhost:3000')