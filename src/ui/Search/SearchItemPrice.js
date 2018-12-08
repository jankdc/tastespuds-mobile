import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SearchItemPrice = ({ minPrice, maxPrice }) => (
  <View style={styles.container}>
    {
      minPrice === maxPrice
        ? <Text
          numberOfLines={1}
          ellipsizeMode='tail'
          style={styles.number}
        >
          £{minPrice}
        </Text>
        : <Text
          numberOfLines={1}
          ellipsizeMode='tail'
          style={styles.rangedNumber}
        >
          £{minPrice}-£{maxPrice}
        </Text>
    }
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
    fontWeight: 'bold',
    fontSize: 14
  },
  rangedNumber: {
    fontWeight: 'bold',
    fontSize: 11
  }
})

export default SearchItemPrice
