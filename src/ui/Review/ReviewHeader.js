import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const ReviewHeader = ({ review }) => (
  <View style={styles.container}>
    <View style={{ flexDirection: 'column' }}>
      <Text style={styles.name}>{review.item.name}</Text>
      <Text style={styles.place} numberOfLines={1} ellipsizeMode='tail'>
        {review.place.name} - <Text style={styles.city}>{review.place.city}</Text>
      </Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: 'white'
  },
  name: {
    fontSize: 16
  },
  place: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 5
  }
})

export default ReviewHeader
