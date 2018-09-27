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

export function * startLoginFlow () {
  while (true) {
    const { value: credentials } = yield take(actions.LOGIN_REQUEST)

    while (yield call(requestLogin, credentials)) {
      const { value: code } = yield take(actions.VERIFY)
      const verifyTask = yield fork(verifyLogin, code)
      const { type } = yield take([
        actions.LOGIN_RESET,
        actions.VERIFY_FAILED,
        actions.VERIFY_PASSED
      ])

      if (type === actions.LOGIN_RESET) {
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

export function * requestLogin (credentials) {
  try {
    yield call(auth0.startPasswordless, {
      send: 'code',
      email: credentials.email,
      connection: 'email'
    })

    return true
  } catch (error) {
    yield put({
      type: actions.LOGIN_REQUEST_FAILED,
      error: 'Failed to request a verification code. Please try again.'
    })

    return false
  }
}

export function * verifyLogin (credentials) {
  try {
    const { profile, tokens } = yield call(platform.createUser, {
      email: credentials.email,
      username: credentials.username,
      connection: 'email',
      verificationCode: credentials.code
    })

    yield all([
      call(SecureStore.setItemAsync, 'expiresIn', JSON.stringify(tokens.expiresIn)),
      call(SecureStore.setItemAsync, 'accessToken', tokens.accessToken),
      call(SecureStore.setItemAsync, 'refreshToken', tokens.refreshToken)
    ])

    yield put({
      type: actions.VERIFY_PASSED,
      value: profile
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

export default function * authSaga () {
  while (true) {
    yield call(startLoginFlow)
    yield take(actions.LOGOUT)
    yield all([
      call(SecureStore.deleteItemAsync, 'expiresIn'),
      call(SecureStore.deleteItemAsync, 'accessToken'),
      call(SecureStore.deleteItemAsync, 'refreshToken')
    ])
    yield call(navigate, 'Login')
  }
}
