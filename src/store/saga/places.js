import { put, call, takeLatest } from 'redux-saga/effects'
import * as platform from '../../clients/platform'
import * as actions from '../actions'

export function * searchPlace ({ name, location }) {
  try {
    const places = yield call(platform.searchPlace, name, location)
    yield put({ type: actions.SEARCH_PLACE_PASSED, value: places })
  } catch (error) {
    yield put({ type: actions.SEARCH_PLACE_FAILED, error })
  }
}

export default function * placesSaga () {
  yield takeLatest(actions.SEARCH_PLACE, searchPlace)
}
