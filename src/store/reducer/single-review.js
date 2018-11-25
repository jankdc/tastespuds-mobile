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
    case actions.LIKE_REVIEW: {
      if (!state.review) {
        return state
      }

      return {
        ...state,
        review: {
          ...state.review,
          num_of_likes: state.review.num_of_likes + 1,
          context: {
            ...state.review.context,
            caller_like_id: true
          }
        }
      }
    }
    case actions.LIKE_REVIEW_PASSED: {
      if (!state.review) {
        return state
      }

      const like = action.value

      return {
        ...state,
        review: {
          ...state.review,
          context: {
            ...state.review.context,
            caller_like_id: like.id
          }
        }
      }
    }
    case actions.UNLIKE_REVIEW: {
      if (!state.review) {
        return state
      }

      return {
        ...state,
        review: {
          ...state.review,
          num_of_likes: state.review.num_of_likes - 1,
          context: {
            ...state.review.context,
            caller_like_id: false
          }
        }
      }
    }
    default:
      return state
  }
}
