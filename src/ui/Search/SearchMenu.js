import React from 'react'
import { StyleSheet, View } from 'react-native'

import SearchSort from './SearchSort'
import SearchWithinLocation from './SearchWithinLocation'

const SearchMenu = () => (
  <View style={styles.container}>
    <SearchSort sortBy='top' />
    <SearchWithinLocation />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10
  }
})

export default SearchMenu
