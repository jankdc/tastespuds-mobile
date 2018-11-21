import { put, call, takeLatest, takeEvery } from 'redux-saga/effects'
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

export function * addComment ({ value: commentData }) {
  try {
    const { reviewId, content, parentCommentId } = commentData

    const comment = yield call(platform.addComment, reviewId, content, parentCommentId)

    yield put({ type: actions.ADD_COMMENT_PASSED, value: comment })
  } catch (error) {
    yield put({ type: actions.ADD_COMMENT_FAILED, error })
  }
}

export default function * commentsSaga () {
  yield takeLatest(actions.GET_COMMENTS, getComments)
  yield takeEvery(actions.ADD_COMMENT, addComment)
}
