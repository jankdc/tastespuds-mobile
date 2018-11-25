import { SecureStore } from 'expo'
import { put, call, takeLatest } from 'redux-saga/effects'
import * as actions from '../actions'
import streamjs from '../../clients/stream-js'
import jwtDecode from 'jwt-decode'

async function getNotificationsAsync (streamId) {
  const notificationToken = await SecureStore.getItemAsync('notificationToken')
  const notificationFeed = streamjs.feed('notification', streamId, notificationToken)

  const notifications = await notificationFeed.get({
    limit: 10
  })

  return notifications
}

export function * getNotifications ({ value }) {
  try {
    const idStr = yield call(SecureStore.getItemAsync, 'idToken')
    const idToken = yield call(jwtDecode, idStr)
    const notifications = yield call(getNotificationsAsync, idToken.sub.replace('|', '_'))

    yield put({ type: actions.GET_NOTIFICATIONS_PASSED, value: notifications.results })
  } catch (error) {
    yield put({ type: actions.GET_NOTIFICATIONS_FAILED, error })
  }
}

export default function * notificationsSaga () {
  yield takeLatest(actions.GET_NOTIFICATIONS, getNotifications)
}
