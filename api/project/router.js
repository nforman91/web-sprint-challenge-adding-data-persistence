const express = require('express')
const Projects = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Projects.find()
        .then(project => {
            res.json(project)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const project = req.body

    Projects.create(project)
        .then(project => {
            res.json(project)
        })
        .catch(next)
})

module.exports = router
