import { LIST_TASKS, EDIT_TASK } from "../actions"

const initialState = {
  tasks: [],
  task: {},
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
    default:
      return state
  }
}

export default reducer