import React from 'react'

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text
} from 'react-native'

import { EvilIcons } from '@expo/vector-icons'

const CameraMenu = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity style={styles.exitButton}>
        <EvilIcons name='close' size={30} color='black' />
      </TouchableOpacity>
    </View>
    <View style={styles.footer}>
      <TouchableOpacity style={styles.snapButton}>
        <Text
          style={{ fontSize: 18, marginBottom: 10, color: 'white' }}
        >
          {' '}Snap{' '}
        </Text>
      </TouchableOpacity>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  header: {
    alignSelf: 'flex-start',
    height: 200
  },
  footer: {
    alignSelf: 'flex-end',
    height: 300
  },
  exitButton: {
    marginLeft: 15,
    marginTop: 20
  },
  snapButton: {
    alignSelf: 'center'
  }
})

export default CameraMenu
