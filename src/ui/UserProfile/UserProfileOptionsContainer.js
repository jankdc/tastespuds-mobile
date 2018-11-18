import { connect } from 'react-redux'

import UserProfileOptions from './UserProfileOptions'
import * as actions from '../../store/actions'

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch({ type: actions.LOGOUT })
  }
}

export default connect(null, mapDispatchToProps)(UserProfileOptions)
