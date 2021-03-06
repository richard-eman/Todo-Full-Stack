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
      return res.body[0]
    })
}

export function deleteTask(usingTaskId) {
  const task = {id: usingTaskId}

  console.log('ya gotta refresh lol')

  return request.post('delete')
    .send(task)
    .then(res => {
      return res.body
    })
}
