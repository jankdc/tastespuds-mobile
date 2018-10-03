import React from 'react'
import { Camera as ExpoCamera } from 'expo'
import { View, StyleSheet, StatusBar } from 'react-native'

import CameraMenu from './CameraMenu'

class Camera extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isCapturing: false
    }

    this._onCapture = this._onCapture.bind(this)
    this._onCancel = this._onCancel.bind(this)
  }

  componentDidMount () {
    StatusBar.setHidden(true)
  }

  componentWillUnmount () {
    StatusBar.setHidden(false)
  }

  async _onCancel () {
    this.props.navigation.navigate('AppTab')
  }

  async _onCapture () {
    this.setState({ isCapturing: true })
    const imageData = await this.camera.takePictureAsync({
      quality: 1.0
    })

    this.setState({ isCapturing: false })
    this.props.navigation.navigate('EditImage', {
      imageData
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <ExpoCamera
          ref={ref => { this.camera = ref }}
          type={ExpoCamera.Constants.Type.back}
          style={styles.camera}
        >
          <CameraMenu
            onCancel={this._onCancel}
            onCapture={this._onCapture}
            disableCapture={this.state.isCapturing}
          />
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
