import React from 'react'
import { Camera as ExpoCamera } from 'expo'
import { View, StyleSheet, StatusBar } from 'react-native'

import CameraMenu from './CameraMenu'

class Camera extends React.Component {
  componentDidMount () {
    StatusBar.setHidden(true)
  }

  componentWillUnmount () {
    StatusBar.setHidden(false)
  }

  render () {
    return (
      <View style={styles.container}>
        <ExpoCamera style={styles.camera} type={ExpoCamera.Constants.Type.back}>
          <CameraMenu />
        </ExpoCamera>
      </View>
    )
  }
}

Camera.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  camera: {
    flex: 1
  }
})

export default Camera
