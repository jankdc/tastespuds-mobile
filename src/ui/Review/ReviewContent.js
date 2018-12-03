import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ReviewContent = ({ username, content }) => (
  <View style={styles.container}>
    <Text style={styles.content}>
      <Text style={styles.user}>{username}</Text> {content}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  user: {
    paddingRight: 5,
    fontWeight: 'bold',
    fontSize: 12
  },
  content: {
    fontSize: 12
  }
})

export default ReviewContent
