import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ReviewSuggestion = ({ suggestion }) => (
  <View style={styles.container}>
    <Text style={styles.content} numberOfLines={1} ellipsizeMode='tail'>
      😞 {suggestion}
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
  content: {
    fontStyle: 'italic',
    fontSize: 12
  }
})

export default ReviewSuggestion
