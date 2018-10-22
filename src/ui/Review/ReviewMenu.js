import React from 'react'
import { EvilIcons } from '@expo/vector-icons'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

const ReviewMenu = ({ onLike, onComment }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={{ marginLeft: 8 }}
      onPress={onLike}
    >
      <EvilIcons
        name='heart'
        size={35}
        color='black'
      />
    </TouchableOpacity>

    <TouchableOpacity
      style={{ marginLeft: 2 }}
      onPress={onComment}
    >
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
  }
})

export default ReviewMenu
