import React from 'react'
import { Entypo, EvilIcons } from '@expo/vector-icons'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

const HeartIcon = (liked) => (liked
  ? <Entypo name='heart' size={30} color='tomato' />
  : <EvilIcons name='heart' size={35} color='black' />
)

const ReviewMenu = ({
  liked,
  onLike,
  onUnlike,
  onComment
}) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={{ marginLeft: 8 }}
      onPress={() => liked ? onUnlike() : onLike()}
    >
      <HeartIcon liked={liked} />
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
