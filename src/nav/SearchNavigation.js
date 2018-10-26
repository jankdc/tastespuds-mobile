import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation'

import Search from '../ui/Search'

const SearchNavigation = createStackNavigator({
  Search: {
    screen: Search
  }
})

SearchNavigation.navigationOptions = {
  tabBarIcon: ({ tintColor }) => {
    return <Ionicons name='md-search' size={30} color={tintColor} />
  }
}

export default SearchNavigation
