import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const ReviewHeader = ({ review }) => (
  <View style={styles.container}>
    <View style={{ flexDirection: 'column' }}>
      <Text style={styles.name}>{review.item.name}</Text>
      <Text style={styles.place}>{review.place.name}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  image: {
    marginLeft: 10,
    height: 30,
    width: 30
  },
  name: {
    marginLeft: 10,
    fontSize: 16
  },
  place: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 12
  }
})

export default ReviewHeader
