import React from 'react'
import { EvilIcons } from '@expo/vector-icons'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

const ReviewMenu = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.item}>
      <EvilIcons
        name='heart'
        size={35}
        color='black'
      />
    </TouchableOpacity>
    <TouchableOpacity style={styles.item}>
      <EvilIcons
        name='comment'
        size={35}
        color='black'
      />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  item: {
    marginLeft: 8
  }
})

export default ReviewMenu
