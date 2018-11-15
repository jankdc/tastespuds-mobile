import React from 'react'

import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'

const AddReviewSuggestion = ({ onChangeText }) => (
  <View style={styles.container}>
    <Text style={styles.label}>😞 Suggestion (optional)</Text>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={50}
        onChangeText={onChangeText}
        placeholder='What needs work (max. 50 characters)...'
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
    height: 50,
    backgroundColor: 'white'
  },
  input: {
    flex: 1,
    fontSize: 16
  }
})

export default AddReviewSuggestion
