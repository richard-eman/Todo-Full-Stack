const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getTasks(db = connection) {
  return db('todos').select()
}

function editTask(task, db = connection) {
  return db('todos').where('id', task.id)
  .update(task)
  .then(() => { //forgot this stupid promise dammit lol took soo much time
    return db('todos').where('id', task.id).first()
  })
}

function addTask(task, db = connection) {
  return db('todos').insert(task)
  .then( newTaskId => {
    return newTaskId
  })
}

function deleteTask(task, db = connection) {
  return db('todos').where('id', task.id).delete()
  .then( numberOfDeletedTasks => {
    return numberOfDeletedTasks
  })
}

module.exports = {
  getTasks,
  editTask,
  addTask,
  deleteTask
}