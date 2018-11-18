import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation'

import Home from '../ui/Home'
import Comments from '../ui/Comments'

const HomeNavigation = createStackNavigator({
  Home: {
    screen: Home
  },
  Comments: {
    screen: Comments
  }
})

HomeNavigation.navigationOptions = {
  tabBarIcon: ({ tintColor }) => {
    return (
      <Ionicons
        name='md-home'
        size={32}
        style={{ marginTop: 3 }}
        color={tintColor}
      />
    )
  }
}

export default HomeNavigation
