import * as actions from '../actions'

const initialState = {
  comments: null,
  metadata: {},
  isLoading: false,
  isSending: false
}

export default function comments (state = initialState, action = {}) {
  switch (action.type) {
    case actions.CLEAR_COMMENTS:
      return {
        ...initialState
      }
    case actions.GET_COMMENTS:
      return {
        ...state,
        isLoading: true
      }
    case actions.GET_COMMENTS_PASSED:
      return {
        ...state,
        comments: action.value.comments,
        metadata: action.value.response_metadata,
        isLoading: false
      }
    case actions.GET_COMMENTS_FAILED:
      return {
        ...state,
        isLoading: false
      }
    case actions.ADD_COMMENT:
      return {
        ...state,
        isSending: true
      }
    case actions.ADD_COMMENT_PASSED:
      return {
        ...state,
        comments: (state.comments && [action.value].concat(state.comments)) || null,
        isSending: false
      }
    case actions.ADD_COMMENT_FAILED:
      return {
        ...state,
        isSending: false
      }
    default:
      return state
  }
}
