const express = require('express')
const server = express()

//configurar pasta publication
server.use(express.static("public"))

//usar template engine
const nunjucks = require('nunjucks')
nunjucks.configure("src/views", {
    express: server,
    moCache: true
})

//configurar caminhos da minha aplicacao
server.get('/', (req, res) => {
 return res.render('index.html')
})
server.get('/create-point', (req, res) => {
 return res.render('create-point.html')
})
server.get('/search', (req, res) => {
 return res.render('search-results.html')
})

// ligar o servidor 
server.listen(3000)
console.log('http://localhost:3000/')
