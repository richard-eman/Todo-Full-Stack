import { getTasks } from "../apis"

export const SHOW_ERROR = 'SHOW_ERROR'
export const LIST_TASKS = 'LIST_TASKS'
export const DELETE_TASK = 'DELETE_TASK'
export const EDIT_TASK = 'EDIT_TASK'

export function setListOfTasks(tasks) {
  return {
    type: LIST_TASKS,
    tasks: tasks,
  }
}

export function fetchTasks() {
  return dispatch => {
    getTasks()
    .then(tasks => {
      dispatch(setListOfTasks(tasks))
    })
  }
}

export function setTaskToEdit(withObject) {
  return {
    type: EDIT_TASK,
    task: withObject
  }
}
