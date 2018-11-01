import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'

const SearchItemLikes = () => (
  <View style={styles.container}>
    <Entypo name='heart' size={20} color='tomato' />
    <Text style={styles.number}>12</Text>
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

export default SearchItemLikes
