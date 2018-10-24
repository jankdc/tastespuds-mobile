import React from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator
} from 'react-native'

import ReviewList from '../ReviewList'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this._onComment = this._onComment.bind(this)
    this._onRefresh = this._onRefresh.bind(this)
  }

  componentDidMount () {
    this.props.onFocus()
  }

  _onRefresh () {
    this.props.onRefresh()
  }

  _onComment (review) {
    this.props.onComment(review)
  }

  _renderLoading () {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color='darkgrey' />
      </View>
    )
  }

  render () {
    if (this.props.isSearching && !this.props.hasSearchedBefore) {
      return this._renderLoading()
    }

    return (
      <View style={styles.container}>
        <ReviewList
          onLike={this.props.onLike}
          reviews={this.props.reviews}
          onComment={this._onComment}
          onRefresh={this._onRefresh}
          refreshing={this.props.isSearching}
        />
      </View>
    )
  }
}

Home.navigationOptions = {
  title: 'Tastespuds',
  headerTitleStyle: {
    fontFamily: 'baloo',
    fontSize: 28
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Home
