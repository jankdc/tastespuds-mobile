import React from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const SearchEmptyItem = () => (
  <View style={styles.container}>
    <Text style={styles.text}>No results</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  text: {
    fontSize: 15,
    color: 'grey'
  }
})

export default SearchEmptyItem
