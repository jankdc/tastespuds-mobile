import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const SearchItemRating = () => (
  <View style={styles.container}>
    <FontAwesome
      name='star'
      size={18}
      color='#FFBF00'
    />
    <Text style={styles.number}>5</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    marginLeft: 4,
    fontWeight: 'bold'
  }
})

export default SearchItemRating
