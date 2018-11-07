import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import Review from '../Review'

const ReviewList = ({
  reviews,
  refreshing,
  onComment,
  onRefresh,
  onUnlike,
  onLike
}) => (
  <View style={styles.container}>
    <FlatList
      data={reviews}
      onRefresh={onRefresh}
      refreshing={refreshing}
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

const styles = StyleSheet.create({
  container: {}
})

export default ReviewList
