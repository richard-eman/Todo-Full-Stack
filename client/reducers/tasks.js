import { LIST_TASKS, EDIT_TASK, CLEAR_TASK } from "../actions"

const initialState = {
  tasks: [],
  task: {},
  // isUserEditing: false,
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
        // isUserEditing: true,
      }
    case CLEAR_TASK:
      return {
        ...state,
        task: action.task,
        // isUserEditing: false,
      }
    default:
      return state
  }
}

export default reducer