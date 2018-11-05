import React from 'react'

import {
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

const SearchItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text
      style={styles.text}
      numberOfLines={1}
      ellipsizeMode='middle'
    >
      {item.name}
    </Text>
    <Text
      style={styles.address}
      numberOfLines={1}
      ellipsizeMode='middle'
    >
      {`${item.street || item.city}`}
    </Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16
  },
  address: {
    fontSize: 14,
    color: 'grey'
  }
})

export default SearchItem
