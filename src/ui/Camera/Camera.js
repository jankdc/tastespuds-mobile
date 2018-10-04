import React from 'react'
import { NavigationEvents } from 'react-navigation'
import { Camera as ExpoCamera } from 'expo'
import { View, StyleSheet, StatusBar } from 'react-native'

import CameraMenu from './CameraMenu'

class Camera extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showCamera: true,
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

  _renderCamera () {
    if (!this.state.showCamera) {
      return null
    }

    return (
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
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <NavigationEvents
          onDidBlur={() => this.setState({ showCamera: false })}
          onWillFocus={() => this.setState({ showCamera: true })}
        />
        { this._renderCamera() }
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
