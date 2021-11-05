// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Resources.find()
        .then(resource => {
            res.json(resource)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const resource = req.body

    Resources.create(resource)
        .then(resource => {
            res.json(resource)
        })
        .catch(next)
})

module.exports = router
