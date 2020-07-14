import { combineReducers } from 'redux'
import tasks from "./tasks"
import showAddButton from "./addButton"
import showEditForm from "./showEditForm"

export default combineReducers({
 tasks,
 showAddButton,
 showEditForm,
})
