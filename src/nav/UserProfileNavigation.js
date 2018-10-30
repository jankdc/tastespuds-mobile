import React from 'react'
import { EvilIcons } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation'

import UserProfile from '../ui/UserProfile'

const UserProfileNavigation = createStackNavigator({
  UserProfile: {
    screen: UserProfile
  }
})

UserProfileNavigation.navigationOptions = {
  tabBarIcon: ({ tintColor }) => {
    return (
      <EvilIcons
        name='user'
        size={38}
        style={{ marginTop: 3 }}
        color={tintColor}
      />
    )
  }
}

export default UserProfileNavigation
