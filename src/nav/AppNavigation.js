import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { createStackNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import AddReview from '../ui/AddReview'
import AddReviewName from '../ui/AddReviewName'
import AddReviewPlace from '../ui/AddReviewPlace'

import BottomTabBar from './BottomTabBar'
import HomeNavigation from './HomeNavigation'
import SearchNavigation from './SearchNavigation'
import UserProfileNavigation from './UserProfileNavigation'

const AppTabNavigation = createBottomTabNavigator(
  {
    Home: HomeNavigation,
    Search: SearchNavigation,
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
    tabBarComponent: BottomTabBar,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        if (navigation.state.routeName === 'Review') {
          return <Ionicons name='md-camera' size={30} color={tintColor} />
        }
      }
    })
  }
)

AppTabNavigation.navigationOptions = {
  header: null
}

export default createStackNavigator(
  {
    AppTab: {
      screen: AppTabNavigation
    },
    AddReview: {
      screen: AddReview
    },
    AddReviewName: {
      screen: AddReviewName
    },
    AddReviewPlace: {
      screen: AddReviewPlace
    }
  },
  {
    mode: 'modal'
  }
)
