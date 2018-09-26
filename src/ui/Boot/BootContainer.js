import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import Boot from './Boot'

const mapDispatchToProps = dispatch => {
  return {
    onBoot: () => dispatch({ type: actions.LOGIN })
  }
}

export default connect(null, mapDispatchToProps)(Boot)
