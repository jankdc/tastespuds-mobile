import * as actions from '../actions'

const initialState = {
  user: null,
  isLoading: false
}

export default function profile (state = initialState, action = {}) {
  switch (action.type) {
    case actions.GET_ME:
      return {
        ...state,
        isLoading: true
      }
    case actions.GET_ME_PASSED:
      return {
        ...state,
        user: action.value,
        isLoading: false
      }
    case actions.GET_ME_FAILED:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}
