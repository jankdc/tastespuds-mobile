import * as actions from '../actions'

const initialState = {
  info: null,
  isLoggedIn: false,
  loginError: null,
  isLoggingIn: false
}

export default function user (state = initialState, action = {}) {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        loginError: null,
        isLoggingIn: true
      }
    case actions.LOGIN_PASSED:
      return {
        ...state,
        info: action.value,
        isLoggingIn: false
      }
    case actions.LOGIN_FAILED:
      return {
        ...state,
        loginError: action.error,
        isLoggingIn: false
      }
    case actions.LOGIN_CANCELLED:
      return {
        ...state,
        isLoggingIn: false
      }
    case actions.LOGOUT:
      return {
        ...initialState
      }
    default:
      return state
  }
}
