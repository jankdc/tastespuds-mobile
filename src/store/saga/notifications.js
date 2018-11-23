import { SecureStore } from 'expo'
import { put, call, takeLatest } from 'redux-saga/effects'
import * as actions from '../actions'
import streamjs from '../../clients/stream-js'
import jwtDecode from 'jwt-decode'

export function * getNotifications ({ value }) {
  try {
    const idStr = yield call(SecureStore.getItemAsync, 'idToken')
    const idToken = yield call(jwtDecode, idStr)

    const notificationToken = yield call(SecureStore.getItemAsync, 'notificationToken')
    const notificationFeed = yield call(streamjs.feed, 'notification', idToken.sub, notificationToken)
    const notifications = yield call(notificationFeed.get, {
      limit: 10
    })

    yield put({ type: actions.GET_NOTIFICATIONS_PASSED, value: notifications.results })
  } catch (error) {
    yield put({ type: actions.GET_NOTIFICATIONS_FAILED, error })
  }
}

export default function * notificationsSaga () {
  yield takeLatest(actions.GET_NOTIFICATIONS, getNotifications)
}
