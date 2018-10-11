import React from 'react'

import {
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

const SearchItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{item.name}</Text>
  </TouchableOpacity>
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
    fontSize: 15
  }
})

export default SearchItem
