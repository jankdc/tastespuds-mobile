import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ReviewHighlight = ({ highlight }) => (
  <View style={styles.container}>
    <Text style={styles.content}>😄 {highlight}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  label: {
    marginLeft: 12,
    fontWeight: 'bold',
    fontSize: 12
  },
  content: {
    marginLeft: 12,
    fontStyle: 'italic',
    fontSize: 12
  }
})

export default ReviewHighlight
