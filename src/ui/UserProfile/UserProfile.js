import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import UserProfileStats from './UserProfileStats'
import UserProfileImage from './UserProfileImage'

const UserProfile = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <UserProfileImage />
      <UserProfileStats />
    </View>
    <Text style={styles.name}>Jan Karlo Dela Cruz</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row'
  },
  name: {
    marginVertical: 15,
    fontWeight: '600',
    fontSize: 16
  }
})

UserProfile.navigationOptions = {
  title: 'Tastespuds',
  headerTitleStyle: {
    fontFamily: 'baloo',
    fontSize: 28
  }
}

export default UserProfile
