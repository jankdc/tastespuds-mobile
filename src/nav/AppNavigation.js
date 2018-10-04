import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ImagePicker, Permissions } from 'expo'

import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'

import HomeNavigation from './HomeNavigation'
import UserProfileNavigation from './UserProfileNavigation'

const AppTabNavigation = createBottomTabNavigator(
  {
    Home: HomeNavigation,
    Search: View,
    Review: View,
    Messages: View,
    UserProfile: UserProfileNavigation
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    },
    tabBarComponent: (props) => (
      <BottomTabBar
        {...props}
        onTabPress={async evt => {
          if (evt.route.routeName !== 'Review') {
            return props.onTabPress(evt)
          }

          const { status: cameraStatus } = await Permissions.askAsync(Permissions.CAMERA)
          if (cameraStatus !== 'granted') {
            return
          }

          const { status: cameraRollStatus } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
          if (cameraRollStatus !== 'granted') {
            return
          }

          const imageData = await ImagePicker.launchCameraAsync()

          if (!imageData.cancelled) {
            props.navigation.navigate('AddReview', imageData)
          }
        }}
      />
    ),
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        if (navigation.state.routeName === 'Review') {
          return <Ionicons name='md-camera' size={30} color={tintColor} />
        }
      }
    })
  }
)

export default createStackNavigator(
  {
    AppTab: {
      screen: AppTabNavigation
    },
    AddReview: {
      screen: View
    }
  },
  {
    headerMode: 'none',
    mode: 'modal'
  }
)
