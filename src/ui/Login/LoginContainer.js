import { connect } from 'react-redux'
import { LOGIN } from '../../store/actions'
import Login from './Login'

const mapDispatchToProps = dispatch => {
  return {
    onLoginPress: () => dispatch({ type: LOGIN })
  }
}

export default connect(null, mapDispatchToProps)(Login)
