import React from 'react'
import { View, StyleSheet } from 'react-native'

import ReviewMenu from './ReviewMenu'
import ReviewDate from './ReviewDate'
import ReviewLikes from './ReviewLikes'
import ReviewRating from './ReviewRating'
import ReviewContent from './ReviewContent'

const ReviewFooter = () => (
  <View style={styles.container}>
    <View style={styles.mainActionsAndRating}>
      <ReviewMenu />
      <ReviewRating />
    </View>
    <ReviewLikes />
    <ReviewContent />
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
