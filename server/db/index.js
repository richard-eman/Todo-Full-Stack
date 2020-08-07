const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getTasks(db = connection) {
  return db('todos').select()
}

function editTask(task, db = connection) {
  console.log('db', task)
  return db('todos').where('id', task.id)
  .update(task)
  .then(() => {//forgot this stupid thing dammit lol took woo much time
    return db('todos').where('id', task.id).first()
  })
}

module.exports = {
  getTasks,
  editTask
}