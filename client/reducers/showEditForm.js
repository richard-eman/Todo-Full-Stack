import { EDITING_TASK } from "../actions"

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EDITING_TASK:
      return action.showEditForm
    default:
      return state
  }
}

export default reducer