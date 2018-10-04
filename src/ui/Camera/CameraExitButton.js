import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity, StyleSheet } from 'react-native'

const CameraExitButton = (buttonProps) => (
  <TouchableOpacity
    style={[buttonProps.style, styles.container]}
    {...buttonProps}
  >
    <MaterialCommunityIcons
      name='close-circle-outline'
      size={28}
      color='black'
    />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    paddingTop: 2.2,
    paddingLeft: 1,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 32,
    width: 32
  }
})

export default CameraExitButton
