import React from 'react'
import { EvilIcons } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation'

import Comments from '../ui/Comments'
import UserProfile from '../ui/UserProfile'
import SingleReview from '../ui/SingleReview'

const UserProfileNavigation = createStackNavigator({
  UserProfile: {
    screen: UserProfile
  },
  SingleReview: {
    screen: SingleReview
  },
  Comments: {
    screen: Comments
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
