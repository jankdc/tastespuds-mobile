import * as actions from '../actions'

const initialState = {
  items: null,
  isSearching: false,
  hasSearchedBefore: false
}

export default function search (state = initialState, action = {}) {
  switch (action.type) {
    case actions.GET_ITEMS:
      return {
        ...state,
        isSearching: true
      }

    case actions.GET_ITEMS_FAILED:
      return {
        ...state,
        isSearching: false
      }

    case actions.GET_ITEMS_PASSED:
      return {
        ...state,
        isSearching: false,
        hasSearchedBefore: true,
        items: action.value
      }

    default:
      return state
  }
}
