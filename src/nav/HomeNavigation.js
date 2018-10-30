import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation'

import Home from '../ui/Home'

const HomeNavigation = createStackNavigator({
  Home: {
    screen: Home
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
