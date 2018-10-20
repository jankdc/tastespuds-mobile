import { put, call, takeLatest } from 'redux-saga/effects'
import { Location, Permissions, SecureStore } from 'expo'
import jwtDecode from 'jwt-decode'

import { navigate } from '../../nav/NavigationService'
import * as platform from '../../clients/platform'
import * as actions from '../actions'

export function * addReview ({ value }) {
  try {
    const idToken = yield call(SecureStore.getItemAsync, 'idToken')
    const profile = yield call(jwtDecode, idToken)

    const asset = yield call(platform.addAsset, {
      uri: value.imageData.uri,
      type: 'image/jpg',
      options: {
        width: `${value.imageData.width}`,
        height: `${value.imageData.height}`
      }
    })

    const review = yield call(platform.addReview, {
      item: value.item.id === undefined
        ? value.item
        : value.item.id,
      rating: value.rating,
      assets: [asset.id],
      userId: profile.sub,
      content: value.content
    })

    yield call(navigate, 'AppTab')
    yield put({ type: actions.ADD_REVIEW_PASSED, value: review })
  } catch (error) {
    yield put({ type: actions.ADD_REVIEW_FAILED, error })
  }
}

export function * searchReviews () {
  try {
    const { status } = yield call(Permissions.askAsync, Permissions.LOCATION)

    if (status !== 'granted') {
      throw new Error('Needs permission to get current user location')
    }

    const { coords } = yield call(Location.getCurrentPositionAsync)
    // NOTE: `coords` when we're ready
    const location = `${50.8233783},${-0.147822}`
    const result = yield call(platform.searchReviews, location)

    yield put({ type: actions.SEARCH_REVIEWS_PASSED, value: result })
  } catch (error) {
    yield put({ type: actions.SEARCH_REVIEWS_FAILED, error })
  }
}

export default function * reviewsSaga () {
  yield takeLatest(actions.ADD_REVIEW, addReview)
  yield takeLatest(actions.SEARCH_REVIEWS, searchReviews)
}
