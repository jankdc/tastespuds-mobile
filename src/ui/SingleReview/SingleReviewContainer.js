import { connect } from 'react-redux'

import SingleReview from './SingleReview'
import * as actions from '../../store/actions'

const mapDispatchToProps = dispatch => {
  return {
    onFocus: (id) => dispatch({ type: actions.GET_REVIEW, value: id })
  }
}

const mapStateToProps = state => {
  return state.singleReview
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleReview)
