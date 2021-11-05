const express = require('express')
const Tasks = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Tasks.find()
        .then(task => {
            res.json(task)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const task = req.body

    Tasks.create(task)
        .then(task => {
            res.json(task)
        })
        .catch(next)
})

module.exports = router
