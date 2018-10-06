import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

const AddReviewFieldButton = ({ label, placeholder, onPress }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TouchableOpacity style={styles.inputContainer} onPress={onPress}>
      <Text style={styles.placeholder}>{placeholder}</Text>
    </TouchableOpacity>
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
    justifyContent: 'center',
    padding: 10,
    height: 50,
    backgroundColor: 'white'
  },
  placeholder: {
    color: 'lightgrey',
    fontSize: 16
  }
})

export default AddReviewFieldButton
