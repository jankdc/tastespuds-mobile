import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

const AddReviewFieldButton = ({
  label,
  value,
  onPress,
  disabled,
  placeholder
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TouchableOpacity
      style={[styles.inputContainer, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      {
        value
          ? <Text style={styles.value}>{value}</Text>
          : <Text style={styles.placeholder}>{placeholder}</Text>
      }
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
    color: 'grey',
    fontSize: 16
  },
  disabled: {
    backgroundColor: 'lightgrey'
  },
  value: {
    color: 'black',
    fontSize: 16
  }
})

export default AddReviewFieldButton
