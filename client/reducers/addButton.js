import { ADDING_TASK } from "../actions"

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_TASK:
      return action.showAddButton
    default:
      return state
  }
}

export default reducer