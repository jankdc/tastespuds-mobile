import * as actions from '../actions'

const initialState = {
  user: null,
  error: null,
  isUserLoggedIn: false,
  isUserLoggingIn: false
}

export default function user (state = initialState, action = {}) {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        error: null,
        isUserLoggingIn: true
      }
    case actions.LOGIN_PASSED:
      return {
        ...state,
        user: action.value,
        isUserLoggedIn: true,
        isUserLoggingIn: false
      }
    case actions.LOGIN_FAILED:
      return {
        ...state,
        error: action.error,
        isUserLoggedIn: false,
        isUserLoggingIn: false
      }
    case actions.LOGIN_CANCELLED:
      return {
        ...state,
        isUserLoggingIn: false
      }
    default:
      return state
  }
}
