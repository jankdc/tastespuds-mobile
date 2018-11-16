import * as actions from '../actions'

const initialState = {
  review: null,
  isLoading: false
}

export default function singleReview (state = initialState, action = {}) {
  switch (action.type) {
    case actions.GET_REVIEW:
      return {
        ...state,
        isLoading: true
      }
    case actions.GET_REVIEW_PASSED:
      return {
        ...state,
        review: action.value,
        isLoading: false
      }
    case actions.GET_REVIEW_FAILED:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}
