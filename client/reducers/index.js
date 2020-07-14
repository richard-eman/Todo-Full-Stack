import { combineReducers } from 'redux'
import tasks from "./tasks"
import showAddButton from "./addButton"

export default combineReducers({
 tasks,
 showAddButton,
})
