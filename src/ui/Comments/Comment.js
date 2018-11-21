import React from 'react'

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text
} from 'react-native'

import Image from 'react-native-image-progress'

import { Entypo, EvilIcons } from '@expo/vector-icons'

const HeartIcon = ({ liked }) => (liked
  ? <Entypo name='heart' size={30} color='tomato' />
  : <EvilIcons name='heart' size={35} color='black' />
)

const Comment = ({ comment }) => (
  <View style={styles.container}>
    <View style={styles.mainContent}>
      <View style={styles.userIconColumn}>
        <Image
          style={styles.userIcon}
          resizeMode='cover'
          source={{ uri: comment.user.picture }}
          imageStyle={{ borderRadius: 10 }}
        />
      </View>
      <View style={styles.commentColumn}>
        <View style={styles.commentContent}>
          <Text style={styles.username}>{ comment.user.username }</Text>
          <Text style={styles.comment}>{ comment.content }</Text>
        </View>
        <View style={styles.statsContent}>
          <Text style={styles.age}>{ comment.creation_date }</Text>
          <Text style={styles.likes}>{ comment.num_of_likes }</Text>

          <TouchableOpacity>
            <Text style={styles.replyButton}>Reply</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.likeCommentColumn}>
        <HeartIcon liked={!!comment.context.caller_like_id} />
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  mainContent: {
    flexDirection: 'row'
  },
  commentContent: {
    flexDirection: 'row'
  },
  statsContent: {
    flexDirection: 'row'
  },
  userIcon: {
    height: 20,
    width: 20
  }
})

export default Comment
