import { put, call, takeLatest } from 'redux-saga/effects'
import * as platform from '../../clients/platform'
import * as actions from '../actions'

export function * getItems ({ value: place }) {
  try {
    const items = yield call(platform.getItems, {
      placeId: place.id
    })

    yield put({ type: actions.GET_ITEMS_PASSED, value: items })
  } catch (error) {
    yield put({ type: actions.GET_ITEMS_FAILED, error })
  }
}

export default function * itemsSaga () {
  yield takeLatest(actions.GET_ITEMS, getItems)
}
