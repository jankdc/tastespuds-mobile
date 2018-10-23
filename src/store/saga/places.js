import { Location, Permissions } from 'expo'
import { put, call, takeLatest } from 'redux-saga/effects'
import * as platform from '../../clients/platform'
import * as actions from '../actions'

export function * searchPlaces ({ value }) {
  try {
    const { status } = yield call(Permissions.askAsync, Permissions.LOCATION)

    if (status !== 'granted') {
      throw new Error('Needs permission to get current user location')
    }

    const { coords } = yield call(Location.getCurrentPositionAsync)
    const location = `${coords.latitude},${coords.longitude}`
    const places = yield call(platform.getPlaces, location)

    yield put({ type: actions.SEARCH_PLACES_PASSED, value: places })
  } catch (error) {
    yield put({ type: actions.SEARCH_PLACES_FAILED, error })
  }
}

export default function * placesSaga () {
  yield takeLatest(actions.SEARCH_PLACES, searchPlaces)
}
