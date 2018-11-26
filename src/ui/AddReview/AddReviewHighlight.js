import React from 'react'

import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'

const AddReviewHighlight = ({ onChangeText, highlight }) => (
  <View style={styles.container}>
    <Text style={styles.label}>😄 Highlight</Text>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={highlight}
        maxLength={50}
        onChangeText={onChangeText}
        placeholder='What is so great about it (max. 50 characters)...'
        underlineColorAndroid='transparent'
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

export default AddReviewHighlight
