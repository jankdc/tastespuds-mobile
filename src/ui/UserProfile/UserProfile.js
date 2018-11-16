import React, { Component } from 'react'

import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  View,
  Text,
  StyleSheet
} from 'react-native'

import { Divider } from 'react-native-elements'

import UserProfileStats from './UserProfileStats'
import UserProfileImage from './UserProfileImage'
import UserProfileGallery from './UserProfileGallery'

class UserProfile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hasMounted: false
    }
  }

  componentDidMount () {
    this.setState({ hasMounted: true })
    this.props.onFocus()
  }

  _numberOfLikes () {
    return this.props.user.reviews.reduce(
      (num, review) => num + parseInt(review.likes, 10),
      0
    )
  }

  render () {
    if ((!this.state.hasMounted && this.props.isLoading) || !this.props.user) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator />
        </View>
      )
    }

    const { user } = this.props

    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            onRefresh={this.props.onRefresh}
            refreshing={this.props.isLoading}
          />
        }
      >
        <View style={styles.headerContainer}>
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

        <Divider />

        <UserProfileGallery reviews={user.reviews} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerContainer: {
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
