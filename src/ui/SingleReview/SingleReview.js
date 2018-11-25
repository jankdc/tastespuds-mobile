import React, { Component } from 'react'

import {
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  View
} from 'react-native'

import Review from '../Review'

class SingleReview extends Component {
  constructor (props) {
    super(props)

    this._onLike = this._onLike.bind(this)
    this._onUnlike = this._onUnlike.bind(this)
    this._onComment = this._onComment.bind(this)
  }

  componentDidMount () {
    const reviewId = this.props.navigation.getParam('reviewId')
    this.props.onFocus(reviewId)
  }

  _onLike () {
    this.props.onLike(this.props.review)
  }

  _onUnlike () {
    this.props.onUnlike(this.props.review)
  }

  _onComment () {
    this.props.navigation.navigate('Comments', {
      review: this.props.review
    })
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
        <Review
          review={review}
          onLike={this._onLike}
          onUnlike={this._onUnlike}
          onComment={this._onComment}
        />
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
