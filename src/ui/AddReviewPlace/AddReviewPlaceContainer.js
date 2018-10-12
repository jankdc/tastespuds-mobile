import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import AddReviewPlace from './AddReviewPlace'

const mapDispatchToProps = dispatch => {
  return {
    onSearch: (name) => dispatch({ type: actions.SEARCH_PLACE, value: { name } }),
    onClear: () => dispatch({ type: actions.SEARCH_PLACE_CLEAR })
  }
}

const mapStateToProps = state => {
  return state.addReview
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewPlace)
