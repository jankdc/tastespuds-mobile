import { connect } from 'react-redux'

import Comments from './Comments'
import * as actions from '../../store/actions'

const mapDispatchToProps = dispatch => {
  return {
    onFocus: (reviewId) => dispatch({
      type: actions.GET_COMMENTS,
      value: reviewId
    })
  }
}

const mapStateToProps = state => {
  return state.comments
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
