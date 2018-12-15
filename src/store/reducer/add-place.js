import * as actions from '../actions'

const initialState = {
  location: null,
  locationError: null,
  isGeocoding: false,
  isAdding: false
}

export default function addPlace (state = initialState, action = {}) {
  switch (action.type) {
    case actions.GEOCODE_PLACE:
      return {
        ...state,
        isGeocoding: true
      }
    case actions.GEOCODE_PLACE_PASSED:
      return {
        ...state,
        location: action.value,
        isGeocoding: false
      }
    case actions.GEOCODE_PLACE_FAILED:
      return {
        ...state,
        locationError: action.error,
        isGeocoding: false
      }
    case actions.ADD_NEW_PLACE:
      return {
        ...state,
        isAdding: true
      }
    case actions.ADD_NEW_PLACE_PASSED:
      return {
        ...state,
        isAdding: false
      }
    case actions.ADD_NEW_PLACE_FAILED:
      return {
        ...state,
        isAdding: false
      }
    default:
      return state
  }
}
