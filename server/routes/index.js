 
const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/yo', (req, res) => {
    res.sendStatus(200)
})

module.exports = router