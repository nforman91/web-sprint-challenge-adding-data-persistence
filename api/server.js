// build your server here and require it from index.js
const express = require('express')
const server = express()
server.use(express.json())

const ProjectsRouter = require('./project/router')
server.use('/api/projects', ProjectsRouter)

const ResourcesRouter = require('./resource/router')
server.use('/api/resources', ResourcesRouter)

const TasksRouter = require('./task/router')
server.use('/api/tasks', TasksRouter)

module.exports = server