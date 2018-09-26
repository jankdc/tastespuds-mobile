import { call, all } from 'redux-saga/effects'

import bootSaga from './boot'
import authSaga from './auth'

export default function * rootSaga () {
  yield all([
    call(bootSaga),
    call(authSaga)
  ])
}
