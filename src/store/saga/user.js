import { AuthSession, SecureStore } from 'expo'
import jwtDecode from 'jwt-decode'

import {
  call,
  take,
  fork,
  put,
  all,
  cancel,
  cancelled
} from 'redux-saga/effects'

import * as platform from '../../clients/platform'
import * as actions from '../actions'
import * as auth0 from '../../clients/auth0'

export function * login () {
  while (true) {
    yield take(actions.LOGIN)
    const task = yield fork(oauth)

    const { type } = yield take([
      actions.LOGOUT,
      actions.LOGIN_FAILED
    ])

    if (type === actions.LOGOUT) {
      yield cancel(task)
    }

    yield all([
      call(SecureStore.deleteItemAsync, 'accessToken'),
      call(SecureStore.deleteItemAsync, 'refreshToken')
    ])
  }
}

export function * oauth () {
  try {
    const idToken = yield call(getNewProfileToken)
    yield put({ type: actions.LOGIN_PASSED, value: idToken })
  } catch (error) {
    yield call(startOauth2Session)
  }
}

export function * getNewProfileToken () {
  let expiresIn = yield call(SecureStore.getItemAsync, 'expiresIn')
  let accessToken = yield call(SecureStore.getItemAsync, 'accessToken')
  let refreshToken = yield call(SecureStore.getItemAsync, 'refreshToken')

  if (typeof expiresIn !== 'string') {
    throw new Error('Missing `expiresIn` in secure store')
  }

  if (typeof refreshToken !== 'string') {
    throw new Error('Missing `refreshToken` in secure store')
  }

  const accessExpiration = yield call(parseInt, expiresIn, 10)

  if (accessExpiration <= (Date.now() / 1000)) {
    accessToken = yield call(auth0.getAccessToken, refreshToken)
  }

  return yield call(auth0.getProfileToken, accessToken)
}

export function * startOauth2Session () {
  try {
    const redirectUrl = yield call(AuthSession.getRedirectUrl)
    const authResults = yield call(AuthSession.startAsync, {
      authUrl: yield call(auth0.authorizeUrl, redirectUrl)
    })

    if (authResults.type === 'error' || (authResults.params && authResults.params.error)) {
      return yield put({ type: actions.LOGIN_FAILED, error: authResults.params.error })
    }

    if (authResults.type === 'cancel') {
      return yield put({ type: actions.LOGIN_CANCELLED })
    }

    if (authResults.type !== 'success') {
      return yield put({ type: actions.LOGIN_FAILED, error: 'Login was unsuccessful. Please try again' })
    }

    const { code } = authResults.params
    const { tokens } = yield call(platform.createUser, code, redirectUrl)

    yield all([
      call(SecureStore.setItemAsync, 'expiresIn', JSON.stringify(tokens.expiresIn)),
      call(SecureStore.setItemAsync, 'accessToken', tokens.accessToken),
      call(SecureStore.setItemAsync, 'refreshToken', tokens.refreshToken)
    ])

    const idTokenJwt = yield call(jwtDecode, tokens.idToken)

    yield put({ type: actions.LOGIN_PASSED, value: idTokenJwt })
  } catch (error) {
    yield put({ type: actions.LOGIN_FAILED, error })
  } finally {
    if (yield cancelled()) {
      AuthSession.dismiss()
    }
  }
}

export default function * userSaga () {
  yield call(login)
}
