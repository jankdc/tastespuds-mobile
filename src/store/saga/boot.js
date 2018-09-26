import {
  call,
  take,
  all
} from 'redux-saga/effects'

import { navigate } from '../../nav/NavigationService'
import * as actions from '../actions'
import { getAccessToken } from './auth'

export function * loadAssets () {
  yield all([
    call(Fony.loadAsync, Ionicons.font),
    call(Fony.loadAsync, EvilIcons.font),
    call(Fony.loadAsync, { 'baloo': require('../../../assets/baloo/Baloo-Regular.ttf') })
  ])
}

export default function * bootSaga () {
  yield take(actions.BOOT)
  yield call(loadAssets)

  try {
    const accessToken = yield call(getAccessToken)
    const userInfo = yield call(auth0.getUserInfo, accessToken)
    yield put({ type: actions.LOGIN_PASSED, value: userInfo })
    yield call(navigate, 'App')
  } catch (error) {
    yield call(navigate, 'Login')
  }
}
