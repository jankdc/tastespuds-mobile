import * as actions from '../actions'

const initialState = {
  comments: null,
  isLoading: false
}

export default function comments (state = initialState, action = {}) {
  switch (action.type) {
    case actions.GET_COMMENTS:
      return {
        ...state,
        isLoading: true
      }
    case actions.GET_COMMENTS_PASSED:
      return {
        ...state,
        comments: action.value,
        isLoading: false
      }
    case actions.GET_COMMENTS_FAILED:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}
