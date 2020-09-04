 
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
  .then(changedTask => {
    res.json(changedTask.id)
  })
})

router.post('/add', (req, res) => {
  db.addTask(req.body)
  .then(newTaskId => {
    res.json(newTaskId)
  })
})

router.post('/delete', (req, res) => {
  db.deleteTask(req.body)
  .then(numberOfDeletedTasks => {
    res.json(numberOfDeletedTasks)
  })
})

module.exports = router