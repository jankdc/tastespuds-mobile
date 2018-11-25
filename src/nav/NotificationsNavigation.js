import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation'

import Notifications from '../ui/Notifications'

const NotificationsNavigation = createStackNavigator({
  Notifications: {
    screen: Notifications
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
