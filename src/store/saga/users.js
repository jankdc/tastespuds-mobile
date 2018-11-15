import { put, call, takeLatest } from 'redux-saga/effects'
import * as platform from '../../clients/platform'
import * as actions from '../actions'

export function * getMe () {
  try {
    const user = yield call(platform.getMe)

    yield put({ type: actions.GET_ME_PASSED, value: user })
  } catch (error) {
    yield put({ type: actions.GET_ME_FAILED, error })
  }
}

export default function * usersSaga () {
  yield takeLatest(actions.GET_ME, getMe)
}
