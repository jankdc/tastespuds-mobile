import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import AddReviewPlace from './AddReviewPlace'

const mapDispatchToProps = dispatch => {
  return {
    onFocus: () => dispatch({ type: actions.SEARCH_PLACES }),
    onClear: () => dispatch({ type: actions.SEARCH_PLACES_CLEAR })
  }
}

const mapStateToProps = state => {
  return state.addReview
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewPlace)
