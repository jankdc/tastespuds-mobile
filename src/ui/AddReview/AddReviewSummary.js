import React from 'react'

import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'

const AddReviewSummary = ({ onBlur, onFocus }) => (
  <View style={styles.container}>
    <Text style={styles.label}>Review Description</Text>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onBlur={onBlur}
        onFocus={onFocus}
        multiline
        placeholder='Write a review...'
      />
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3'
  },
  label: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    color: 'grey',
    fontSize: 12,
    fontWeight: 'bold'
  },
  inputContainer: {
    padding: 10,
    height: 100,
    backgroundColor: 'white'
  },
  input: {
    flex: 1,
    fontSize: 16
  }
})

export default AddReviewSummary
