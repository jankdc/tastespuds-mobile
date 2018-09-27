import { Font } from 'expo'
import { EvilIcons, Ionicons } from '@expo/vector-icons'

import {
  call,
  take,
  put,
  all
} from 'redux-saga/effects'

import baloo from '../../../assets/baloo/Baloo-Regular.ttf'
import { navigate } from '../../nav/NavigationService'
import * as auth0 from '../../clients/auth0'
import * as actions from '../actions'
import { getAccessToken } from './auth'

export function * loadAssets () {
  yield all([
    call(Font.loadAsync, Ionicons.font),
    call(Font.loadAsync, EvilIcons.font),
    call(Font.loadAsync, { baloo })
  ])
}

export default function * bootSaga () {
  yield take(actions.BOOT)
  yield call(loadAssets)

  // NOTE: Uncomment this if you want to delete the tokens forcefully
  // yield all([
  //   call(SecureStore.deleteItemAsync, 'expiresIn'),
  //   call(SecureStore.deleteItemAsync, 'accessToken'),
  //   call(SecureStore.deleteItemAsync, 'refreshToken')
  // ])

  try {
    const accessToken = yield call(getAccessToken)
    const userInfo = yield call(auth0.getUserInfo, accessToken)
    yield put({ type: actions.VERIFY_PASSED, value: userInfo })
    yield call(navigate, 'App')
  } catch (error) {
    yield call(navigate, 'Login')
  }
}
