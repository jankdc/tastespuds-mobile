import * as actions from '../actions'

const initialState = {
  searchedPlaces: null,
  isSearching: false
}

export default function addReview (state = initialState, action = {}) {
  switch (action.type) {
    case actions.SEARCH_PLACE:
      return {
        ...state,
        isSearching: true
      }
    case actions.SEARCH_PLACE_CLEAR:
      return {
        ...initialState
      }
    case actions.SEARCH_PLACE_FAILED:
      return {
        ...state,
        isSearching: false
      }
    case actions.SEARCH_PLACE_PASSED:
      return {
        ...state,
        isSearching: false,
        searchedPlaces: action.value
      }
    default:
      return state
  }
}
