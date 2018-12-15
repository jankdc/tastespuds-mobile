import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import AddReviewPlace from './AddReviewPlace'

const mapDispatchToProps = dispatch => {
  return {
    onClear: () => dispatch({ type: actions.SEARCH_PLACES_CLEAR }),
    onFocus: () => dispatch({ type: actions.SEARCH_PLACES_NEARBY }),
    onEmpty: () => dispatch({ type: actions.SEARCH_PLACES_NEARBY }),
    onSearch: (keyword) => dispatch({ type: actions.SEARCH_PLACES_BY_KEYWORD, value: keyword })
  }
}

const mapStateToProps = state => {
  return state.addReview
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewPlace)
