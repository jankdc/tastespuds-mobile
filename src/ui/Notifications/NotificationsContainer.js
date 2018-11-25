import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import Notifications from './Notifications'

const mapDispatchToProps = dispatch => {
  return {
    onFocus: () => dispatch({ type: actions.GET_NOTIFICATIONS }),
    onRefresh: () => dispatch({ type: actions.GET_NOTIFICATIONS })
  }
}

const mapStateToProps = state => {
  return state.notifications
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
