import React from 'react'
import { Feather } from '@expo/vector-icons'
import { SearchBar } from 'react-native-elements'
import { StyleSheet, Platform } from 'react-native'
import { SafeAreaView, createStackNavigator } from 'react-navigation'

import Search from '../ui/Search'

const SearchNavigation = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      header: () => (
        <SafeAreaView style={styles.headerContainer}>
          <SearchBar
            platform={Platform.OS}
            placeholder='Search'
            containerStyle={styles.searchBar}
            cancelButtonTitle='Cancel'
          />
        </SafeAreaView>
      )
    }
  }
})

SearchNavigation.navigationOptions = {
  tabBarIcon: ({ tintColor }) => {
    return <Feather name='search' size={26} color={tintColor} />
  },
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white'
  },
  searchBar: {
    backgroundColor: 'white'
  }
})

export default SearchNavigation
