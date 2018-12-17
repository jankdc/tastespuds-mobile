import React from 'react'

import { View, FlatList, StyleSheet } from 'react-native'

import Review from '../Review'
import ReviewListWarning from './ReviewListWarning'

const ReviewList = ({
  reviews,
  refreshing,
  onComment,
  onRefresh,
  onUnlike,
  onLike
}) => {
  if (!reviews) {
    return (
      <ReviewListWarning
        refreshing={refreshing}
        onRefresh={onRefresh}
        message='Could not get nearby reviews'
      />
    )
  }

  if (reviews.length === 0) {
    return (
      <ReviewListWarning
        refreshing={refreshing}
        onRefresh={onRefresh}
        message='No reviews near you at the moment'
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={reviews}
        onRefresh={onRefresh}
        refreshing={refreshing}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({ item: review, index }) => (
          <Review
            review={review}
            onLike={() => onLike(review, index)}
            onUnlike={() => onUnlike(review, index)}
            onComment={() => onComment(review, index)}
          />
        )}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default ReviewList
