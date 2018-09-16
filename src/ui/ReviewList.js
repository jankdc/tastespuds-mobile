import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import Review from './Review'

const ReviewList = ({ reviews }) => (
  <View style={styles.container}>
    <FlatList
      data={reviews}
      renderItem={({ item: review }) => <Review review={review} />}
      keyExtractor={item => item.id}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {}
})

export default ReviewList
