import request from 'superagent'

export function getTasks() {
  return request.get('list')
    .then(res => {
      return res.body
    })
}

export function editTask(task) {
  return request.post('edit')
    .send(task)
    .then(res => {
      return res.body
    })
}

export function addTask(task) {
  return request.post('add')
    .send(task)
    .then(res => {
      return res.body
    })
}

export function deleteTask(id) {
  console.log('ya gotta refresh lol')
  return request.post('delete')
    .send(id)
    .then(res => {
      return res.body
    })
}
