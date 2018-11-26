import React from 'react'

import { View, FlatList, StyleSheet } from 'react-native'

import Review from '../Review'
import ReviewListEmpty from './ReviewListEmpty'

const ReviewList = ({
  reviews,
  refreshing,
  onComment,
  onRefresh,
  onUnlike,
  onLike
}) => {
  if (reviews && reviews.length === 0) {
    return (
      <ReviewListEmpty
        refreshing={refreshing}
        onRefresh={onRefresh}
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
