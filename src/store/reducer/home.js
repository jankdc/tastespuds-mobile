import * as actions from '../actions'

const initialState = {
  reviews: null,
  isSearching: false,
  hasSearchedBefore: false
}

export default function home (state = initialState, action = {}) {
  switch (action.type) {
    case actions.SEARCH_REVIEWS:
      return {
        ...state,
        isSearching: true
      }
    case actions.SEARCH_REVIEWS_FAILED:
      return {
        ...state,
        isSearching: false
      }
    case actions.SEARCH_REVIEWS_PASSED:
      return {
        ...state,
        isSearching: false,
        hasSearchedBefore: true,
        reviews: action.value.reviews
      }
    default:
      return state
  }
}
