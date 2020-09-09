import { LIST_TASKS, EDIT_TASK, CLEAR_TASK, SET_FORM_MODE } from "../actions"

const initialState = {
  tasks: [],
  task: {},
  isUserEditing: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      }
    case EDIT_TASK:
      return {
        ...state,
        task: action.task,
      }
    case CLEAR_TASK:
      return {
        ...state,
        task: action.task,
      }
    case SET_FORM_MODE:
      return {
        ...state,
        isUserEditing: action.isUserEditing,
      }
    default:
      return state
  }
}

export default reducer