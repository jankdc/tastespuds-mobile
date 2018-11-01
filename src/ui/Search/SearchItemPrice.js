import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const SearchItemPrice = () => (
  <View style={styles.container}>
    <FontAwesome name='dollar' size={14} color='grey' />
    <FontAwesome name='dollar' size={14} color='lightgrey' />
    <FontAwesome name='dollar' size={14} color='lightgrey' />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    fontSize: 18
  },
  number: {
    marginLeft: 4,
    fontWeight: 'bold'
  }
})

export default SearchItemPrice
