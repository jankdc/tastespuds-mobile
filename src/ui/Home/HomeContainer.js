import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import Home from './Home'

const mapDispatchToProps = dispatch => {
  return {
    onFocus: () => dispatch({ type: actions.SEARCH_REVIEWS })
  }
}

const mapStateToProps = state => {
  return state.home
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
