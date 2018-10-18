import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import AddReview from './AddReview'

const mapDispatchToProps = dispatch => {
  return {
    onShare: (review) => dispatch({
      type: actions.ADD_REVIEW,
      value: review
    })
  }
}

const mapStateToProps = state => {
  return state.addReview
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReview)
