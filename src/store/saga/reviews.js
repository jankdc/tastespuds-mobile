import { put, call, takeLatest } from 'redux-saga/effects'
import { Location, Permissions, SecureStore } from 'expo'
import jwtDecode from 'jwt-decode'

import { navigate } from '../../nav/NavigationService'
import * as platform from '../../clients/platform'
import * as actions from '../actions'

export function * addReview ({ value }) {
  try {
    const fileMeta = {
      uri: value.imageData.uri,
      type: 'image/jpeg',
      name: `${Date.now()}.jpg`
    }

    const idToken = yield call(SecureStore.getItemAsync, 'idToken')
    const profile = yield call(jwtDecode, idToken)

    const result = yield call(platform.makeAsset, fileMeta, {
      width: `${value.imageData.width}`,
      height: `${value.imageData.height}`
    })

    const review = yield call(platform.makeReview, {
      item: value.item.id === undefined
        ? value.item
        : value.item.id,
      price: value.price,
      rating: value.rating,
      assets: [result.id],
      user_id: profile.sub,
      content: value.content,
      highlight: value.highlight,
      suggestion: value.suggestion
    })

    yield call(navigate, 'AppTab')
    yield put({ type: actions.ADD_REVIEW_PASSED, value: review })
  } catch (error) {
    yield put({ type: actions.ADD_REVIEW_FAILED, error })
  }
}

export function * likeReview ({ value }) {
  try {
    const like = yield call(platform.likeReview, value.id)

    yield put({ type: actions.LIKE_REVIEW_PASSED, value: like })
  } catch (error) {
    yield put({ type: actions.LIKE_REVIEW_FAILED, error })
  }
}

export function * unlikeReview ({ value }) {
  try {
    const { id: reviewId, context } = value

    const like = yield call(platform.unlikeReview,
      reviewId,
      context.caller_like_id
    )

    yield put({ type: actions.UNLIKE_REVIEW_PASSED, value: like })
  } catch (error) {
    yield put({ type: actions.UNLIKE_REVIEW_FAILED, error })
  }
}

export function * searchReviews () {
  try {
    const { status } = yield call(Permissions.askAsync, Permissions.LOCATION)

    if (status !== 'granted') {
      throw new Error('Needs permission to get current user location')
    }

    const { coords } = yield call(Location.getCurrentPositionAsync)
    const location = `${coords.latitude},${coords.longitude}`
    const reviews = yield call(platform.getReviews, location)

    yield put({ type: actions.SEARCH_REVIEWS_PASSED, value: reviews })
  } catch (error) {
    yield put({ type: actions.SEARCH_REVIEWS_FAILED, error })
  }
}

export function * getReview ({ value: id }) {
  try {
    const review = yield call(platform.getReview, id)

    yield put({ type: actions.GET_REVIEW_PASSED, value: review })
  } catch (error) {
    yield put({ type: actions.GET_REVIEW_FAILED, error })
  }
}

export default function * reviewsSaga () {
  yield takeLatest(actions.GET_REVIEW, getReview)
  yield takeLatest(actions.ADD_REVIEW, addReview)
  yield takeLatest(actions.LIKE_REVIEW, likeReview)
  yield takeLatest(actions.UNLIKE_REVIEW, unlikeReview)
  yield takeLatest(actions.SEARCH_REVIEWS, searchReviews)
  yield takeLatest(actions.ADD_REVIEW_PASSED, searchReviews)
}
