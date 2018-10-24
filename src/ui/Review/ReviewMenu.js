import React from 'react'
import { AntDesign, EvilIcons } from '@expo/vector-icons'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

const ReviewMenu = ({ liked, onLike, onComment }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={{ marginLeft: 8 }}
      onPress={onLike}
    >
      <AntDesign
        name={liked ? 'heart' : 'hearto'}
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
