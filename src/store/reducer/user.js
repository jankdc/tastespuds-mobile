import * as actions from '../actions'

const initialState = {
  info: null,
  isLoggedIn: false,

  isRequestingLogin: false,
  requestError: null,

  isVerifyingLogin: false,
  verificationError: null,

  isRegistering: false,
  registerError: null
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
    case actions.REGISTER:
      return {
        ...state,
        registerError: null,
        isRequestingREGISTER: true
      }
    case actions.REGISTER_PASSED:
      return {
        ...state,
        isRegistering: false
      }
    case actions.REGISTER_FAILED:
      return {
        ...state,
        registerError: action.error,
        isRegistering: false
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
    case actions.VERIFY_CANCELLED:
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
