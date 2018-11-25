import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation'

import Notifications from '../ui/Notifications'
import SingleReview from '../ui/SingleReview'

const NotificationsNavigation = createStackNavigator({
  Notifications: {
    screen: Notifications
  },
  SingleReview: {
    screen: SingleReview
  }
})

NotificationsNavigation.navigationOptions = {
  tabBarIcon: ({ tintColor }) => {
    return (
      <Ionicons
        name='md-notifications'
        size={30}
        style={{ marginTop: 4 }}
        color={tintColor}
      />
    )
  }
}

export default NotificationsNavigation
