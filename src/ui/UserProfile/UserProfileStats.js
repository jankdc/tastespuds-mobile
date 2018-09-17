import React from 'react'
import { View, StyleSheet } from 'react-native'
import UserProfileStatsItem from './UserProfileStatsItem'

const UserProfileStats = () => (
  <View style={styles.container}>
    <View style={styles.stats}>
      <UserProfileStatsItem label='reviews' value='0' />
      <UserProfileStatsItem label='followers' value='0' />
      <UserProfileStatsItem label='likes' value='0' />
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingTop: 10
  }
})

export default UserProfileStats
