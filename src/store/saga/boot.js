import jwtDecode from 'jwt-decode'
import { SecureStore, Font, Image, Asset } from 'expo'
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
  yield call(cacheImages, [
    require('../../../assets/breakfast-bg.jpg')
  ])

  yield all([
    call(Font.loadAsync, Entypo.font),
    call(Font.loadAsync, Ionicons.font),
    call(Font.loadAsync, EvilIcons.font),
    call(Font.loadAsync, MaterialCommunityIcons.font),
    call(Font.loadAsync, { baloo })
  ])
}

async function cacheImages (images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync()
    }
  })
}

export default function * bootSaga () {
  yield take(actions.BOOT)
  yield call(loadAssets)

  // NOTE: Uncomment this if you want to delete the tokens forcefully
  // yield all([
  //   call(SecureStore.deleteItemAsync, 'idToken'),
  //   call(SecureStore.deleteItemAsync, 'expiresIn'),
  //   call(SecureStore.deleteItemAsync, 'accessToken'),
  //   call(SecureStore.deleteItemAsync, 'refreshToken'),
  //   call(SecureStore.deleteItemAsync, 'notificationToken')
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
      call(SecureStore.deleteItemAsync, 'refreshToken'),
      call(SecureStore.deleteItemAsync, 'notificationToken')
    ])
    yield call(navigate, 'Login')
  }
}
