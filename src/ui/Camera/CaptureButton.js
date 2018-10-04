import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

const CaptureButton = (buttonProps) => (
  <TouchableOpacity
    style={[buttonProps.style, styles.container]}
    {...buttonProps}
  >
    <View style={styles.inner} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 33,
    height: 66,
    width: 66
  },
  inner: {
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor: '#272d33',
    borderWidth: 7,
    height: 60,
    width: 60
  }
})

export default CaptureButton
