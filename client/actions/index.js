import { getTasks } from "../apis"

export const SHOW_ERROR = 'SHOW_ERROR'
export const LIST_TASKS = 'LIST_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const ADDING_TASK = 'ADDING_TASK'
export const EDIT_TASK = 'UPDATE_TASK'
export const EDITING_TASK = 'EDITING_TASK'
export const DELETE_TASK = 'DELETE_TASK'

export function setListOfTasks(tasks) {
  return {
    type: LIST_TASKS,
    tasks: tasks,
  }
}

export function fetchTasks() {
  return dispatch => {
    getTasks().then(tasks => {
      dispatch(setListOfTasks(tasks))
    })
  }
}

export function showAddButton(boolean){
  return {
    type: ADDING_TASK,
    showAddButton: boolean
  }
}

export function showEditForm(boolean){
  return {
    type: EDITING_TASK,
    showEditForm: boolean
  }
}
