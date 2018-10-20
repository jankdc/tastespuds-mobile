import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ReviewContent = ({ username, content }) => (
  <View style={styles.container}>
    <Text style={styles.user}>{username}</Text>
    <Text style={styles.content}>{content}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  user: {
    marginLeft: 12,
    fontWeight: 'bold',
    fontSize: 12
  },
  content: {
    marginLeft: 5,
    fontSize: 12
  }
})

export default ReviewContent
