import { AuthSession, SecureStore } from 'expo'

import {
  call,
  take,
  fork,
  put,
  all,
  cancelled
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
  try {
    const result = yield call(AuthSession.startAsync, {
      authUrl: auth0.authorizeUrl()
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
    const user = yield call(auth0.getUserInfo, tokens.accessToken)

    if (!user.user_metadata.username) {
      yield call(navigate, 'CreateUsername')
      const action = yield take(actions.CREATE_USERNAME)
      yield call(createUsername, action.value)
    }

    yield all([
      call(SecureStore.setItemAsync, 'expiresIn', tokens.expiresIn),
      call(SecureStore.setItemAsync, 'accessToken', tokens.accessToken),
      call(SecureStore.setItemAsync, 'refreshToken', tokens.refreshToken)
    ])

    yield put({ type: actions.LOGIN_PASSED, value: user })
  } catch (error) {
    yield put({ type: actions.LOGIN_FAILED, error })
  } finally {
    if (yield cancelled()) {
      AuthSession.dismiss()
    }
  }
}

export function * createUsername () {
  console.log('some user')
}

export default function * authSaga () {
  while (true) {
    yield take(actions.LOGIN)
    yield fork(startAuthFlow)
    yield take([actions.LOGOUT, actions.LOGIN_FAILED, actions.LOGIN_CANCELLED])
    yield all([
      call(SecureStore.deleteItemAsync, 'expiresIn'),
      call(SecureStore.deleteItemAsync, 'accessToken'),
      call(SecureStore.deleteItemAsync, 'refreshToken')
    ])
    yield call(navigate, 'Login')
  }
}
