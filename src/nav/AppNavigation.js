import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'

import HomeNavigation from './HomeNavigation'
import AddReviewNavigation from './AddReviewNavigation'
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
        onTabPress={evt => {
          if (evt.route.routeName === 'Review') {
            props.navigation.navigate('AddReview')
          } else {
            props.onTabPress(evt)
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
      screen: AddReviewNavigation
    }
  },
  {
    headerMode: 'none',
    mode: 'modal'
  }
)
