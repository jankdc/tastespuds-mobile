import React from 'react'
import { StyleSheet, View } from 'react-native'

import ReviewHeader from './ReviewHeader'
import ReviewFooter from './ReviewFooter'
import ReviewBody from './ReviewBody'

const Review = ({ review }) => (
  <View style={styles.container}>
    <ReviewHeader
      review={review}
    />
    <ReviewBody
      review={review}
    />
    <ReviewFooter
      review={review}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'red'
  }
})

export default Review
