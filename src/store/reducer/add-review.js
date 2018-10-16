import * as actions from '../actions'

const initialState = {
  searchedPlaces: null,
  isSearching: false,
  isGetting: false,
  items: null
}

export default function addReview (state = initialState, action = {}) {
  switch (action.type) {
    case actions.SEARCH_PLACES:
      return {
        ...state,
        isSearching: true
      }
    case actions.SEARCH_PLACES_CLEAR:
      return {
        ...initialState
      }
    case actions.SEARCH_PLACES_FAILED:
      return {
        ...state,
        isSearching: false
      }
    case actions.SEARCH_PLACES_PASSED:
      return {
        ...state,
        isSearching: false,
        searchedPlaces: action.value
      }
    case actions.GET_ITEMS:
      return {
        ...state,
        isGetting: true
      }
    case actions.GET_ITEMS_CLEAR:
      return {
        ...initialState
      }
    case actions.GET_ITEMS_FAILED:
      return {
        ...state,
        isGetting: false
      }
    case actions.GET_ITEMS_PASSED:
      return {
        ...state,
        isGetting: false,
        items: action.value
      }
    default:
      return state
  }
}
