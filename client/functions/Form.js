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

function setTaskIfEdited(name, details, priority, idForDB){
  const task = {
    id: idForDB,
    task_name: name,
    details: details,
    priority: priority
  }
  return task
}

function setTaskIfAdding(name, details, priority){
  const task = {
    task_name: name,
    details: details,
    priority: priority
  }
  return task
}

export function setTask(name, details, priority, idForDB, editingCheck) {
  if ( editingCheck == true ) {
    return setTaskIfEdited(name, details, priority, idForDB)
  }
  else {
    return setTaskIfAdding(name, details, priority)
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
