import { AuthSession, SecureStore } from 'expo'
import jwtDecode from 'jwt-decode'

import {
  call,
  take,
  fork,
  put,
  all,
  cancelled,
  cancel
} from 'redux-saga/effects'

import { navigate } from '../../nav/NavigationService'
import * as platform from '../../clients/platform'
import * as actions from '../actions'
import * as auth0 from '../../clients/auth0'

export function * getCredentials () {
  const idToken = yield call(SecureStore.getItemAsync, 'idToken')
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
    return { idToken, accessToken }
  }

  const freshTokens = yield call(auth0.refreshAccess, refreshToken)
  const currentTime = Date.now() / 1000
  yield all([
    call(SecureStore.setItemAsync, 'idToken', freshTokens.id_token),
    call(SecureStore.setItemAsync, 'expiresIn', JSON.stringify(currentTime + freshTokens.expires_in)),
    call(SecureStore.setItemAsync, 'accessToken', freshTokens.access_token)
  ])

  return { idToken: freshTokens.id_token, accessToken: freshTokens.access_token }
}

export function * startAuthFlow () {
  try {
    const result = yield call(AuthSession.startAsync, {
      authUrl: auth0.authorizeUrl(AuthSession.getRedirectUrl())
    })

    if (result.type === 'error' || (result.params && result.params.error)) {
      return yield put({ type: actions.LOGIN_FAILED, error: 'Login was unsuccessful. Please try again' })
    }

    if (result.type === 'cancel') {
      return yield put({ type: actions.LOGIN_CANCELLED })
    }

    if (result.type !== 'success') {
      return yield put({ type: actions.LOGIN_FAILED, error: 'Login was unsuccessful. Please try again' })
    }

    const tokens = yield call(platform.login, result.params.code)
    const currentTime = Date.now() / 1000

    yield all([
      call(SecureStore.setItemAsync, 'idToken', tokens.id_token),
      call(SecureStore.setItemAsync, 'expiresIn', JSON.stringify(currentTime + tokens.expires_in)),
      call(SecureStore.setItemAsync, 'accessToken', tokens.access_token),
      call(SecureStore.setItemAsync, 'refreshToken', tokens.refresh_token),
      call(SecureStore.setItemAsync, 'notificationToken', tokens.notification_token)
    ])

    const user = yield call(jwtDecode, tokens.id_token)
    yield put({ type: actions.LOGIN_PASSED, value: user })
    yield call(navigate, 'App')
  } catch (error) {
    yield put({ type: actions.LOGIN_FAILED, error })
  } finally {
    if (yield cancelled()) {
      AuthSession.dismiss()
    }
  }
}

export default function * authSaga () {
  while (true) {
    yield take(actions.LOGIN)
    const task = yield fork(startAuthFlow)
    yield take([actions.LOGOUT, actions.LOGIN_FAILED, actions.LOGIN_CANCELLED])
    yield cancel(task)
    yield all([
      call(SecureStore.deleteItemAsync, 'idToken'),
      call(SecureStore.deleteItemAsync, 'expiresIn'),
      call(SecureStore.deleteItemAsync, 'accessToken'),
      call(SecureStore.deleteItemAsync, 'refreshToken'),
      call(SecureStore.deleteItemAsync, 'notificationToken')
    ])
    yield call(navigate, 'Login')
  }
}
