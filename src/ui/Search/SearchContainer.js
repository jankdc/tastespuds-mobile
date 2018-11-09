import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import Search from './Search'

const mapDispatchToProps = dispatch => {
  return {
    onFocus: (query) => dispatch({
      type: actions.GET_ITEMS,
      value: query
    }),
    onSearch: (query) => dispatch({
      type: actions.GET_ITEMS,
      value: query
    }),
    onRefresh: (query) => dispatch({
      type: actions.GET_ITEMS,
      value: query
    })
  }
}

const mapStateToProps = state => {
  return state.search
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
