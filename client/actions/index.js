import { getTasks } from "../apis"

export const SHOW_ERROR = 'SHOW_ERROR'
export const LIST_TASKS = 'LIST_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const DELETE_TASK = 'DELETE_TASK'

export function setListOfTasks(tasks) {
  console.log('setListOfTasks action')
  return {
    type: LIST_TASKS,
    tasks: tasks,
  }
}

export function fetchTasks() {
  console.log('fetchTasks db action')
  return dispatch => {
    getTasks().then(tasks => {
      dispatch(setListOfTasks(tasks))
    })
  }
}