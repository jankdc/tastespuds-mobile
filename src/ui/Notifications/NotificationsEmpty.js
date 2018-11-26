import React from 'react'

import {
  RefreshControl,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native'

import { Ionicons } from '@expo/vector-icons'

const NotificationsEmpty = ({ onRefresh, refreshing }) => (
  <ScrollView
    contentContainerStyle={styles.container}
    showsVerticalScrollIndicator={false}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }
  >
    <Ionicons
      name='md-notifications'
      size={100}
      color='#C0C0C0'
    />
    <Text style={styles.message}>
      No notifications
    </Text>
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    color: 'dimgrey'
  }
})

export default NotificationsEmpty
