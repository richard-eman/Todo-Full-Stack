 
const express = require('express')
const router = express.Router()

const db = require('../db')

// test route
router.get('/yo', (req, res) => {
  res.sendStatus(200)
})

// test db function
router.get('/hi', (req, res) => {
  db.getTasks()
    .then(tasks => {
        res.json(tasks)
    })
})

router.get('/list', (req, res) => {
  db.getTasks()
    .then(tasks => {
        res.json(tasks)
    })
})

module.exports = router