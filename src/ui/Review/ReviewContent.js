import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ReviewContent = () => (
  <View style={styles.container}>
    <Text style={styles.user}>jankdc</Text>
    <Text style={styles.content}>🎉🎉🎉 Really good quality for its price!</Text>
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
