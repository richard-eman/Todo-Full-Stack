 
const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/test', (req, res) => {
  res.sendStatus(200)
})

router.get('/list', (req, res) => {
  db.getTasks()
    .then(tasks => {
        res.json(tasks)
    })
})

router.post('/edit', (req, res) => {
  db.editTask(req.body)
})

router.post('/add', (req, res) => {
  db.addTask(req.body)
})

router.post('/delete', (req, res) => {
  db.deleteTask(req.body)
})

module.exports = router