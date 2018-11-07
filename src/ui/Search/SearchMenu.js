import React from 'react'
import { StyleSheet, View } from 'react-native'

import SearchSort from './SearchSort'
import SearchWithinLocation from './SearchWithinLocation'

const SearchMenu = ({ city, level, sort }) => (
  <View style={styles.container}>
    <SearchSort sortBy={sort} />
    <SearchWithinLocation city={city} level={level} />
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
