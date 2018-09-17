import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const UserProfileStatsItem = ({ label, value }) => (
  <View style={styles.container}>
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.label}>{label}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  label: {
    marginTop: 2,
    color: '#818181'
  }
})

export default UserProfileStatsItem
