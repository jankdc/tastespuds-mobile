import { Location, Permissions } from 'expo'
import { put, call, takeLatest } from 'redux-saga/effects'
import * as platform from '../../clients/platform'
import * as actions from '../actions'

export function * geocodePlace ({ value: address }) {
  try {
    const { status } = yield call(Permissions.askAsync, Permissions.LOCATION)
    if (status !== 'granted') {
      throw new Error('Needs permission to geocode location')
    }

    const locations = yield call(Location.geocodeAsync, address)
    if (locations.length === 0) {
      throw new Error('Address does not exist')
    }

    yield put({ type: actions.GEOCODE_PLACE_PASSED, value: locations[0] })
  } catch (error) {
    yield put({ type: actions.GEOCODE_PLACE_FAILED, error })
  }
}

export function * searchPlacesNearby () {
  try {
    const { status } = yield call(Permissions.askAsync, Permissions.LOCATION)

    if (status !== 'granted') {
      throw new Error('Needs permission to get current user location')
    }

    const { coords } = yield call(Location.getCurrentPositionAsync)
    const location = `${coords.latitude},${coords.longitude}`
    const places = yield call(platform.getPlaces, {
      location
    })

    yield put({ type: actions.SEARCH_PLACES_PASSED, value: places })
  } catch (error) {
    yield put({ type: actions.SEARCH_PLACES_FAILED, error })
  }
}

export function * searchPlacesByKeyword ({ value: keyword }) {
  try {
    const places = yield call(platform.getPlaces, {
      keyword
    })

    yield put({ type: actions.SEARCH_PLACES_PASSED, value: places })
  } catch (error) {
    yield put({ type: actions.SEARCH_PLACES_FAILED, error })
  }
}

export default function * placesSaga () {
  yield takeLatest(actions.SEARCH_PLACES_NEARBY, searchPlacesNearby)
  yield takeLatest(actions.SEARCH_PLACES_BY_KEYWORD, searchPlacesByKeyword)
  yield takeLatest(actions.GEOCODE_PLACE, geocodePlace)
}
