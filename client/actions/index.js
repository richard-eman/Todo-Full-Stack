import { getTasks } from "../apis"

export const SHOW_ERROR = 'SHOW_ERROR'
export const LIST_TASKS = 'LIST_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const DELETE_TASK = 'DELETE_TASK'

export function getListOfTasks() {
  return {
    type: LIST_TASKS,
    id: 1,
    task_name: 'wash dishes',
    details: '',
    priority: 'high',
    completed: false
  }
}