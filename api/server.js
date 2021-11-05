// build your server here and require it from index.js
const express = require('express')
const server = express()
server.use(express.json())

const ProjectsRouter = require('./project/router')
server.use('/api/projects', ProjectsRouter)

module.exports = server