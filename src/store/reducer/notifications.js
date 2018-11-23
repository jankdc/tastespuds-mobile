import * as actions from '../actions'

const initialState = {
  notifications: null,
  isLoading: false
}

export default function notifications (state = initialState, action = {}) {
  switch (action.type) {
    case actions.GET_NOTIFICATIONS:
      return {
        ...state,
        isLoading: true
      }
    case actions.GET_NOTIFICATIONS_PASSED:
      return {
        ...state,
        notifications: action.value,
        isLoading: false
      }
    case actions.GET_NOTIFICATIONS_FAILED:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}
