import React from 'react'
import ReactNavigationTabs from 'react-navigation-tabs'
import { Permissions, ImagePicker } from 'expo'

class BottomTabBar extends React.Component {
  constructor (props) {
    super(props)

    this._onTabPress = this._onTabPress.bind(this)
  }

  async _onTabPress (evt) {
    if (evt.route.routeName !== 'Review') {
      return this.props.onTabPress(evt)
    }

    const { status: locationStatus } = await Permissions.askAsync(
      Permissions.LOCATION
    )

    if (locationStatus !== 'granted') {
      return
    }

    const { status: cameraStatus } = await Permissions.askAsync(
      Permissions.CAMERA
    )

    if (cameraStatus !== 'granted') {
      return
    }

    const { status: cameraRollStatus } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    )

    if (cameraRollStatus !== 'granted') {
      return
    }

    const imageData = await ImagePicker.launchCameraAsync()

    if (!imageData.cancelled) {
      this.props.navigation.navigate('AddReview', {
        imageData
      })
    }
  }

  render () {
    return (
      <ReactNavigationTabs.BottomTabBar
        {...this.props}
        onTabPress={this._onTabPress}
      />
    )
  }
}

export default BottomTabBar
