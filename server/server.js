// const path = require('path')
const express = require('express')

const server = express()

const routes = require('./routes')

server.use(express.json())
server.use(express.static('public'))
// server.use(express.static(path.join(__dirname, './public')))

server.use('/', routes)

module.exports = server
