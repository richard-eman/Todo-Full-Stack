import { LIST_TASKS } from "../actions"

const initialState = null

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_TASKS:
      return action.tasks
    default:
      return state
  }
}

export default reducer