import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import Home from './Home'

const mapDispatchToProps = dispatch => {
  return {
    onLike: (review) => dispatch({
      type: actions.LIKE_REVIEW,
      value: review
    }),
    onFocus: () => dispatch({
      type: actions.SEARCH_REVIEWS
    }),
    onRefresh: () => dispatch({
      type: actions.SEARCH_REVIEWS
    })
  }
}

const mapStateToProps = state => {
  return state.home
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
