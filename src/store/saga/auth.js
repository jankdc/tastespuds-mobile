import { SecureStore } from 'expo'

import {
  call,
  take,
  fork,
  put,
  all,
  cancel
} from 'redux-saga/effects'

import { navigate } from '../../nav/NavigationService'
import * as platform from '../../clients/platform'
import * as actions from '../actions'
import * as auth0 from '../../clients/auth0'

export function * getAccessToken () {
  const expiresIn = yield call(SecureStore.getItemAsync, 'expiresIn')
  const accessToken = yield call(SecureStore.getItemAsync, 'accessToken')
  const refreshToken = yield call(SecureStore.getItemAsync, 'refreshToken')

  if (typeof expiresIn !== 'string') {
    throw new Error('Missing `expiresIn` in secure store')
  }

  if (typeof refreshToken !== 'string') {
    throw new Error('Missing `refreshToken` in secure store')
  }

  const accessExpiration = yield call(parseInt, expiresIn, 10)

  if (accessExpiration > (Date.now() / 1000)) {
    return accessToken
  }

  return yield call(auth0.getAccessToken, refreshToken)
}

export function * startAuthFlow () {
  while (true) {
    const { type, value: credentials } = yield take([actions.LOGIN, actions.REGISTER])

    let requestSuccess = false
    if (type === actions.LOGIN) {
      requestSuccess = yield call(requestLogin, credentials)
    }

    if (type === actions.REGISTER) {
      requestSuccess = yield call(requestRegister, credentials)
    }

    if (!requestSuccess) {
      continue
    }

    while (true) {
      const { value: code } = yield take(actions.VERIFY)
      const verifyTask = yield fork(verifyCode, code)
      const { type } = yield take([
        actions.VERIFY_CANCELLED,
        actions.VERIFY_FAILED,
        actions.VERIFY_PASSED
      ])

      if (type === actions.VERIFY_CANCELLED) {
        yield cancel(verifyTask)
        break
      }

      if (type === actions.VERIFY_PASSED) {
        yield call(navigate, 'App')
        return
      }
    }
  }
}

export function * verifyCode (credentials) {
  try {
    const { user, tokens } = yield call(platform.verify, credentials)

    yield all([
      call(SecureStore.setItemAsync, 'expiresIn', JSON.stringify(tokens.expiresIn)),
      call(SecureStore.setItemAsync, 'accessToken', tokens.accessToken),
      call(SecureStore.setItemAsync, 'refreshToken', tokens.refreshToken)
    ])

    yield put({
      type: actions.VERIFY_PASSED,
      value: user
    })

    return true
  } catch (error) {
    yield put({
      type: actions.VERIFY_FAILED,
      error: 'Failed to verify the code. Please try again.'
    })

    return false
  }
}

export function * requestLogin (credentials) {
  try {
    yield call(platform.login, credentials)

    return true
  } catch (error) {
    yield put({
      type: actions.LOGIN_FAILED,
      error: 'Failed to login. Please try again.'
    })

    return false
  }
}

export function * requestRegister (credentials) {
  try {
    yield call(platform.register, credentials)

    return true
  } catch (error) {
    yield put({
      type: actions.REGISTER_FAILED,
      error: 'Failed to register. Please try again.'
    })

    return false
  }
}

export default function * authSaga () {
  while (true) {
    yield call(startAuthFlow)
    yield take(actions.LOGOUT)
    yield all([
      call(SecureStore.deleteItemAsync, 'expiresIn'),
      call(SecureStore.deleteItemAsync, 'accessToken'),
      call(SecureStore.deleteItemAsync, 'refreshToken')
    ])
    yield call(navigate, 'Login')
  }
}
