import * as actions from '../actions'

const initialState = {
  info: null,
  isLoggedIn: false,

  isRequestingLogin: false,
  requestError: null,

  isVerifyingLogin: false,
  verificationError: null
}

export default function user (state = initialState, action = {}) {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        requestError: null,
        isRequestingLogin: true
      }
    case actions.LOGIN_PASSED:
      return {
        ...state,
        isRequestingLogin: false
      }
    case actions.LOGIN_FAILED:
      return {
        ...state,
        requestError: action.error,
        isRequestingLogin: false
      }
    case actions.VERIFY:
      return {
        ...state,
        verificationError: null,
        isVerifyingLogin: true
      }
    case actions.VERIFY_PASSED:
      return {
        ...state,
        user: action.value,
        isLoggedIn: true,
        isVerifyingLogin: false
      }
    case actions.VERIFY_FAILED:
      return {
        ...state,
        verificationError: action.error,
        isLoggedIn: false,
        isVerifyingLogin: false
      }
    case actions.LOGIN_RESET:
      return {
        ...state,
        isVerifyingLogin: false,
        isRequestingLogin: false,
        verificationError: null
      }
    default:
      return state
  }
}
