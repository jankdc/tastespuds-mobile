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
  ? <Entypo name='heart' size={20} color='tomato' />
  : <EvilIcons name='heart' size={25} color='lightgrey' />
)

const Comment = ({ comment }) => (
  <View style={styles.container}>
    <View style={styles.mainContent}>
      <View style={styles.userIconColumn}>
        <Image
          style={styles.userIcon}
          resizeMode='cover'
          source={{ uri: comment.user.picture }}
          imageStyle={{ borderRadius: 15 }}
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
    padding: 10,
    width: '100%'
  },
  mainContent: {
    flexDirection: 'row'
  },
  commentColumn: {
    flex: 1
  },
  commentContent: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  statsContent: {
    flexDirection: 'row',
    flex: 1
  },
  userIconColumn: {
    padding: 5,
    paddingRight: 8
  },
  userIcon: {
    height: 30,
    width: 30
  },
  username: {
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 14
  }
})

export default Comment
