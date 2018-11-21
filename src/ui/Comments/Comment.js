import React from 'react'

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text
} from 'react-native'

import ago from 's-ago'
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
          <Text style={styles.age}>{ ago(new Date(comment.creation_date)) }</Text>

          {
            comment.num_of_likes > 0 &&
            <Text style={styles.likes}>
              { comment.num_of_likes } like{ comment.num_of_likes === 1 ? '' : 's'}
            </Text>
          }

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
    flex: 1,
    paddingTop: 10
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
  },
  age: {
    fontSize: 12
  },
  likes: {
    fontSize: 12,
    paddingLeft: 10
  }
})

export default Comment
