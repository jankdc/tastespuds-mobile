import React from 'react'
import { Feather } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation'

import Search from '../ui/Search'

const SearchNavigation = createStackNavigator({
  Search: {
    screen: Search
  }
})

SearchNavigation.navigationOptions = {
  tabBarIcon: ({ tintColor }) => {
    return <Feather name='search' size={26} color={tintColor} />
  }
}

export default SearchNavigation
