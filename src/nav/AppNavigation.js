import { View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'

import HomeNavigation from './HomeNavigation'
import UserProfileNavigation from './UserProfileNavigation'

export default createBottomTabNavigator(
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
    }
  }
)
