import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ReviewLikes = ({ likes }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{likes} likes</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  text: {
    marginLeft: 12,
    fontWeight: 'bold',
    fontSize: 12
  }
})

export default ReviewLikes
