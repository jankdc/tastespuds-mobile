import jwtDecode from 'jwt-decode'
import { SecureStore, Font } from 'expo'
import {
  Entypo,
  Ionicons,
  EvilIcons,
  MaterialCommunityIcons
} from '@expo/vector-icons'

import {
  call,
  take,
  put,
  all
} from 'redux-saga/effects'

import baloo from '../../../assets/baloo/Baloo-Regular.ttf'
import { navigate } from '../../nav/NavigationService'
import * as actions from '../actions'
import { getCredentials } from './auth'

export function * loadAssets () {
  yield all([
    call(Font.loadAsync, Entypo.font),
    call(Font.loadAsync, Ionicons.font),
    call(Font.loadAsync, EvilIcons.font),
    call(Font.loadAsync, MaterialCommunityIcons.font),
    call(Font.loadAsync, { baloo })
  ])
}

export default function * bootSaga () {
  yield take(actions.BOOT)
  yield call(loadAssets)

  // NOTE: Uncomment this if you want to delete the tokens forcefully
  // yield all([
  //   call(SecureStore.deleteItemAsync, 'idToken'),
  //   call(SecureStore.deleteItemAsync, 'expiresIn'),
  //   call(SecureStore.deleteItemAsync, 'accessToken'),
  //   call(SecureStore.deleteItemAsync, 'refreshToken')
  // ])

  try {
    const { idToken } = yield call(getCredentials)
    yield call(jwtDecode, idToken)
    yield put({ type: actions.LOGIN_PASSED })
    yield call(navigate, 'App')
    yield take([actions.LOGOUT])
  } catch (error) {
    console.log(error)
  } finally {
    yield all([
      call(SecureStore.deleteItemAsync, 'idToken'),
      call(SecureStore.deleteItemAsync, 'expiresIn'),
      call(SecureStore.deleteItemAsync, 'accessToken'),
      call(SecureStore.deleteItemAsync, 'refreshToken')
    ])
    yield call(navigate, 'Login')
  }
}
