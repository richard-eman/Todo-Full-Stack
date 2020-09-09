import { getTasks } from "../apis"

export const SHOW_ERROR = 'SHOW_ERROR'
export const LIST_TASKS = 'LIST_TASKS'
export const DELETE_TASK = 'DELETE_TASK'
export const EDIT_TASK = 'EDIT_TASK'
export const CLEAR_TASK = 'CLEAR_TASK'
export const SET_FORM_MODE = 'SET_FORM_MODE'

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

export function clearTaskFromGlobalState() {
  return {
    type: CLEAR_TASK,
    task: {}
  }
}

export function isUserEditingTask(boolean) {
  return {
    type: SET_FORM_MODE,
    isUserEditing: boolean
  }
}
