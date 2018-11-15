import { connect } from 'react-redux'
import UserProfile from './UserProfile'

const mapDispatchToProps = dispatch => {
  return {
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.info
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
