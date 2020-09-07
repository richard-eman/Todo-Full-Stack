import { addTask } from "../apis"
import { editTask } from '../apis'

export function checkIfEditing(taskIdFromGlobalState) {
  if (taskIdFromGlobalState == undefined){
    return false
  }
  else return true
}

export function setTaskIdToUndefined() {
  const task = {
    id: undefined,
  }
  return task
}

export function setTask(name, details, priority, idForDB, editingCheck) {
  if ( editingCheck == true ) {
    const task = {
      id: idForDB,
      task_name: name,
      details: details,
      priority: priority
    }
    return task
  }
  else {
    const task = {
      task_name: name,
      details: details,
      priority: priority
    }
    return task
  }
}

export function postWithCorrectApi (task, editingCheck) {
  if (editingCheck == true) {
    editTask(task)
  }
  else {
    addTask(task)
  }
}
