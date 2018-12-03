import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ReviewHighlight = ({ highlight }) => (
  <View style={styles.container}>
    <Text style={styles.content} numberOfLines={1} ellipsizeMode='tail'>
      😄 {highlight}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 12,
    backgroundColor: 'white'
  },
  content: {
    fontStyle: 'italic',
    fontSize: 12
  }
})

export default ReviewHighlight
