import React from 'react'

import {
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native'

import { EvilIcons } from '@expo/vector-icons'

const CameraMenu = ({ onCancel }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity style={styles.exitButton} onPress={onCancel}>
        <EvilIcons name='close' size={30} color='black' />
      </TouchableOpacity>
    </View>
    <View style={styles.footer}>
      <TouchableOpacity style={styles.snapButton}>
        <View style={styles.snapButtonInner} />
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
    justifyContent: 'center',
    height: 100
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120
  },
  exitButton: {
    marginLeft: 15
  },
  snapButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 33,
    height: 66,
    width: 66
  },
  snapButtonInner: {
    backgroundColor: 'white',
    borderRadius: 30,
    borderWidth: 3,
    height: 60,
    width: 60
  }
})

export default CameraMenu
