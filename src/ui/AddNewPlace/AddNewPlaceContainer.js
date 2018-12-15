import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import AddNewPlace from './AddNewPlace'

const mapDispatchToProps = dispatch => {
  return {
    onSearch: (address) => {
      dispatch({ type: actions.GEOCODE_PLACE, value: address })
    },
    onSubmit: (newPlace) => {
      dispatch({ type: actions.ADD_NEW_PLACE, value: newPlace })
    }
  }
}

const mapStateToProps = state => {
  return state.addPlace
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewPlace)
