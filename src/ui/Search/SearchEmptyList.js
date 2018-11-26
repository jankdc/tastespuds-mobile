import React from 'react'

import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import { EvilIcons } from '@expo/vector-icons'

const SearchEmptyList = () => (
  <View>
    <EvilIcons
      name='search'
      size={100}
      color='#C0C0C0'
    />
    <Text style={styles.message}>
      No results
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    color: 'dimgrey'
  }
})

export default SearchEmptyList
