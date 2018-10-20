import React from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator
  } from 'react-native'

import ReviewList from '../ReviewList'

class Home extends React.Component {
  componentDidMount () {
    this.props.onFocus()
  }

  _renderLoading () {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color='darkgrey' />
      </View>
    )
  }

  render () {
    if (this.props.isSearching) {
      return this._renderLoading()
    }

    return (
      <View style={styles.container}>
        <ReviewList
          reviews={this.props.reviews}
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
