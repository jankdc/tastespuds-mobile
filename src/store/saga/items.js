import { put, call, takeLatest } from 'redux-saga/effects'
import * as platform from '../../clients/platform'
import * as actions from '../actions'

export function * getItemsInPlace ({ value: place }) {
  try {
    const items = yield call(platform.getItems, {
      place_id: place.id
    })

    yield put({ type: actions.GET_ITEMS_IN_PLACE_PASSED, value: items })
  } catch (error) {
    yield put({ type: actions.GET_ITEMS_IN_PLACE_FAILED, error })
  }
}

export default function * itemsSaga () {
  yield takeLatest(actions.GET_ITEMS_IN_PLACE, getItemsInPlace)
}
