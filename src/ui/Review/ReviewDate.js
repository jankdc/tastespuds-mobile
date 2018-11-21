import React from 'react'
import ago from 's-ago'
import { View, Text, StyleSheet } from 'react-native'

const ReviewDate = ({ date }) => (
  <View style={styles.container}>
    <Text style={styles.date}>
      { ago(new Date(date)).toLocaleUpperCase() }
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingVertical: 5,
    backgroundColor: 'white'
  },
  date: {
    marginLeft: 12,
    fontWeight: 'bold',
    fontSize: 10,
    color: '#A2A3A6'
  }
})

export default ReviewDate
