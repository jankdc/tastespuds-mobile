import React from 'react'
import { EvilIcons } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation'

import UserProfile from '../ui/UserProfile'
import SingleReview from '../ui/SingleReview'

const UserProfileNavigation = createStackNavigator({
  UserProfile: {
    screen: UserProfile
  },
  SingleReview: {
    screen: SingleReview
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
