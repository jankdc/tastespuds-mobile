import React, { Component } from 'react'

import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet
} from 'react-native'

import UserProfileStats from './UserProfileStats'
import UserProfileImage from './UserProfileImage'

class UserProfile extends Component {
  componentDidMount () {
    this.props.onFocus()
  }

  _numberOfLikes () {
    return this.props.user.reviews.reduce(
      (num, review) => num + parseInt(review.likes, 10),
      0
    )
  }

  render () {
    if (this.props.isLoading || !this.props.user) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator />
        </View>
      )
    }

    const { user } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <UserProfileImage uri={user.picture} />

          <UserProfileStats
            reviews={user.reviews.length}
            likes={this._numberOfLikes()}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.email}>{user.email}</Text>
          <Text style={styles.username}>@{user.username}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row'
  },
  email: {
    marginVertical: 10,
    fontWeight: '600',
    fontSize: 16
  },
  username: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 10,
    color: 'grey'
  }
})

UserProfile.navigationOptions = ({ navigation }) => {
  return {
    title: 'User Profile'
  }
}

export default UserProfile
