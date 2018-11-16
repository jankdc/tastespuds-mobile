import React, { Component } from 'react'

import {
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  View
} from 'react-native'

import Review from '../Review'

class SingleReview extends Component {
  componentDidMount () {
    const reviewId = this.props.navigation.getParam('reviewId')
    this.props.onFocus(reviewId)
  }

  render () {
    const { review, isLoading } = this.props

    if (isLoading || !review) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <ScrollView style={styles.container}>
        <Review review={review} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default SingleReview
