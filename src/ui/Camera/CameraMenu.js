import React from 'react'

import {
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

const CameraMenu = ({ disableCapture, onCancel, onCapture }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity style={styles.exitButton} onPress={onCancel}>
        <MaterialCommunityIcons name='close-circle-outline' size={28} color='black' />
      </TouchableOpacity>
    </View>
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.captureButton}
        onPress={onCapture}
        disabled={disableCapture}
      >
        <View style={styles.captureButtonInner} />
      </TouchableOpacity>
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
    justifyContent: 'center'
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120
  },
  exitButton: {
    marginLeft: 15,
    paddingTop: 2.2,
    paddingLeft: 1,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 32,
    width: 32
  },
  captureButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 33,
    height: 66,
    width: 66
  },
  captureButtonInner: {
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor: '#272d33',
    borderWidth: 7,
    height: 60,
    width: 60
  }
})

export default CameraMenu
