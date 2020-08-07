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
  .then(() => {//forgot this stupid thing dammit lol took woo much time
    return db('todos').where('id', task.id).first()
  })
}

function addTask(task, db = connection) {
  return db('todos').insert(task)
  .then((something) => {
    return something
  })
}

function deleteTask(task, db = connection) {
  return db('todos').where('id', task.id).delete()
  .then((something) => {
    return something
  })
}

module.exports = {
  getTasks,
  editTask,
  addTask,
  deleteTask
}