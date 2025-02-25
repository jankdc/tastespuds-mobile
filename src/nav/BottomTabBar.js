import React from 'react'
import { Alert, View } from 'react-native'
import ActionSheet from 'react-native-actionsheet'
import ReactNavigationTabs from 'react-navigation-tabs'
import { Permissions, ImagePicker } from 'expo'

const OPTIONS = [
  'Load Existing Image',
  'Open Camera',
  'Cancel'
]

class BottomTabBar extends React.Component {
  constructor (props) {
    super(props)

    this._onOption = this._onOption.bind(this)
    this._onTabPress = this._onTabPress.bind(this)
  }

  async _onOption (index) {
    const option = OPTIONS[index]
    if (option === 'Cancel') {
      return
    }

    const { status: locationStatus } = await Permissions.askAsync(
      Permissions.LOCATION
    )

    if (locationStatus !== 'granted') {
      Alert.alert(
        'Oops! We need permission!',
        'Unable to use feature without location service',
        [
          { text: 'Close' }
        ],
        { cancelable: true }
      )
      return
    }

    const { status: cameraStatus } = await Permissions.askAsync(
      Permissions.CAMERA
    )

    if (cameraStatus !== 'granted') {
      Alert.alert(
        'Oops! We need permission!',
        'Unable to use feature without the camera service',
        [
          { text: 'Close' }
        ],
        { cancelable: true }
      )
      return
    }

    const { status: cameraRollStatus } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    )

    if (cameraRollStatus !== 'granted') {
      Alert.alert(
        'Oops! We need permission!',
        'Unable to use feature without the camera roll service',
        [
          { text: 'Close' }
        ],
        { cancelable: true }
      )
      return
    }

    let imageData = null
    if (option === 'Load Existing Image') {
      imageData = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: 'Images'
      })
    }

    if (option === 'Open Camera') {
      imageData = await ImagePicker.launchCameraAsync({
        mediaTypes: 'Images'
      })
    }

    if (!imageData.cancelled) {
      this.props.navigation.navigate('AddReview', {
        imageData
      })
    }
  }

  _onTabPress (evt) {
    if (evt.route.routeName !== 'Review') {
      return this.props.onTabPress(evt)
    }

    this.ActionSheet.show()
  }

  render () {
    return (
      <View>
        <ActionSheet
          ref={(o) => { this.ActionSheet = o }}
          options={OPTIONS}
          cancelButtonIndex={2}
          onPress={this._onOption}
        />

        <ReactNavigationTabs.BottomTabBar
          {...this.props}
          onTabPress={this._onTabPress}
        />
      </View>
    )
  }
}

export default BottomTabBar
