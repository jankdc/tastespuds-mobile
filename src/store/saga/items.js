import { put, call, takeLatest } from 'redux-saga/effects'
import * as platform from '../../clients/platform'
import * as actions from '../actions'

export function * getItems ({ value }) {
  try {
    const items = yield call(platform.getItems, {
      gplaceId: value.gplaceId
    })

    yield put({ type: actions.GET_ITEMS_PASSED, value: items })
  } catch (error) {
    yield put({ type: actions.GET_ITEMS_FAILED, error })
  }
}

export default function * itemsSaga () {
  yield takeLatest(actions.GET_ITEMS, getItems)
}
