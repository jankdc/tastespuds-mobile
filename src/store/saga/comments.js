import { put, call, takeLatest } from 'redux-saga/effects'
import * as platform from '../../clients/platform'
import * as actions from '../actions'

export function * getComments ({ value: reviewId }) {
  try {
    const response = yield call(platform.getComments, reviewId)

    yield put({ type: actions.GET_COMMENTS_PASSED, value: response })
  } catch (error) {
    yield put({ type: actions.GET_COMMENTS_FAILED, error })
  }
}

export default function * commentsSaga () {
  yield takeLatest(actions.GET_COMMENTS, getComments)
}
