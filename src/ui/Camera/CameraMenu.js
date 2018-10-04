import React from 'react'
import { StyleSheet, View } from 'react-native'

import CaptureButton from './CaptureButton'
import CameraExitButton from './CameraExitButton'

const CameraMenu = ({ disableCapture, onCancel, onCapture }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <CameraExitButton onPress={onCancel} />
    </View>
    <View style={styles.footer}>
      <CaptureButton onPress={onCapture} disabled={disableCapture} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'transparent'
  },
  header: {
    height: 80,
    paddingHorizontal: 15,
    justifyContent: 'center'
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120
  }
})

export default CameraMenu
