import { Alert } from 'react-native'
import { put, call, takeLatest } from 'redux-saga/effects'
import { ImageManipulator, Location, Permissions, SecureStore } from 'expo'
import jwtDecode from 'jwt-decode'

import { navigate } from '../../nav/NavigationService'
import * as platform from '../../clients/platform'
import * as actions from '../actions'

import {
  LocationPermissionError
} from '../../utils/errors'

export function * addReview ({ value }) {
  try {
    let imageData = value.imageData

    if (imageData.width > 2500 || imageData.height > 2500) {
      const biggerDimension = imageData.width > imageData.height ? 'width' : 'height'
      imageData = yield call(ImageManipulator.manipulateAsync, imageData.uri, [{
        resize: { [biggerDimension]: 2500 }
      }])
    }

    const fileMeta = {
      uri: imageData.uri,
      type: 'image/jpeg',
      name: `${Date.now()}.jpg`
    }

    const idToken = yield call(SecureStore.getItemAsync, 'idToken')
    const profile = yield call(jwtDecode, idToken)

    const result = yield call(platform.makeAsset, fileMeta, {
      width: `${imageData.width}`,
      height: `${imageData.height}`
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
      throw new LocationPermissionError('Needs permission to get current user location')
    }

    const { coords } = yield call(Location.getCurrentPositionAsync)
    const location = `${coords.latitude},${coords.longitude}`
    const reviews = yield call(platform.getReviews, location)

    yield put({ type: actions.SEARCH_REVIEWS_PASSED, value: reviews })
  } catch (error) {
    yield put({ type: actions.SEARCH_REVIEWS_FAILED, error })

    if (error instanceof LocationPermissionError) {
      yield call(Alert.alert,
        'Oops! We need permission!',
        'Please turn on your location service',
        [
          { text: 'Close', onPress: () => {} }
        ],
        { cancelable: true }
      )
    } else {
      yield call(Alert.alert,
        'Oops! Something went wrong',
        'Please try again later',
        [
          { text: 'Close' }
        ],
        { cancelable: true }
      )
    }
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
