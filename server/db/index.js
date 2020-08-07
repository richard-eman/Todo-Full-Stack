const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getTasks(db = connection) {
  return db('todos').select()
}

function editTask(db = connection, task) {
  return db('todos').where('id', task.id)
  .update(
    'task_name', task.name,
    'details', task.details,
    )
}

module.exports = {
  getTasks,
  editTask
}