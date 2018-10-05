import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

const AddReviewSummary = ({ onBlur, onFocus }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      onBlur={onBlur}
      onFocus={onFocus}
      multiline
      placeholder='Write a review...'
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3'
  },
  input: {
    flex: 1,
    fontSize: 16
  }
})

export default AddReviewSummary
