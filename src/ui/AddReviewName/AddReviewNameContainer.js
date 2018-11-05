import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import AddReviewName from './AddReviewName'

const mapDispatchToProps = dispatch => {
  return {
    onSearch: (selectedPlace) => dispatch({
      type: actions.GET_ITEMS_IN_PLACE,
      value: selectedPlace
    }),
    onClear: () => dispatch({
      type: actions.GET_ITEMS_IN_PLACE_CLEAR
    })
  }
}

const mapStateToProps = state => {
  return state.addReview
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewName)
