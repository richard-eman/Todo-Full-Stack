import { LIST_TASKS } from "./actions"

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_TASKS:
      return action.getTasks
    default:
      return state
  }
}

export default reducer