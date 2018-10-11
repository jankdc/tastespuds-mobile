import { Location, Permissions } from 'expo'
import { put, call, takeLatest } from 'redux-saga/effects'
import * as platform from '../../clients/platform'
import * as actions from '../actions'

export function * searchPlace ({ value }) {
  try {
    const { status } = yield call(Permissions.askAsync, Permissions.LOCATION)

    if (status !== 'granted') {
      return yield put({
        type: actions.SEARCH_PLACE_FAILED,
        error: 'Needs permission to get current user location'
      })
    }

    const { coords } = yield call(Location.getCurrentPositionAsync)
    const location = `${coords.latitude},${coords.longitude}`
    const places = yield call(platform.searchPlace, value.name, location)

    yield put({ type: actions.SEARCH_PLACE_PASSED, value: places })
  } catch (error) {
    yield put({ type: actions.SEARCH_PLACE_FAILED, error })
  }
}

export default function * placesSaga () {
  yield takeLatest(actions.SEARCH_PLACE, searchPlace)
}
