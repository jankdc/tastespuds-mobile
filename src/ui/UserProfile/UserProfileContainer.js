import { connect } from 'react-redux'

import UserProfile from './UserProfile'
import * as actions from '../../store/actions'

const mapDispatchToProps = dispatch => {
  return {
    onFocus: () => dispatch({ type: actions.GET_ME }),
    onRefresh: () => dispatch({ type: actions.GET_ME })
  }
}

const mapStateToProps = state => {
  return state.profile
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
