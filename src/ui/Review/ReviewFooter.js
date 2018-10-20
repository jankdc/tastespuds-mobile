import React from 'react'
import { View, StyleSheet } from 'react-native'

import ReviewMenu from './ReviewMenu'
import ReviewDate from './ReviewDate'
import ReviewLikes from './ReviewLikes'
import ReviewRating from './ReviewRating'
import ReviewContent from './ReviewContent'

const ReviewFooter = ({ review }) => (
  <View style={styles.container}>
    <View style={styles.mainActionsAndRating}>
      <ReviewMenu />
      <ReviewRating rating={review.rating} />
    </View>

    <ReviewLikes
      likes={review.num_of_likes}
    />

    <ReviewContent
      username={review.user.username}
      content={review.content}
    />
    <ReviewDate />
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 10
  },
  mainActionsAndRating: {
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  }
})

export default ReviewFooter
