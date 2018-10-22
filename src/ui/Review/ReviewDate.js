import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function renderRelativeDate(date) {
  const today = new Date()
  const yesterday = new Date()
  yesterday.setDate(today.getDate() - 1)

  if (date > yesterday) {
    const hourDiff = Math.ceil(Math.abs(today - date) / (60*60*1000))

    return hourDiff > 1
      ? `${hourDiff} HOURS AGO`
      : `${hourDiff} HOUR AGO`
  }

  const dayDiff = Math.ceil(Math.abs(today - date) / (24*60*60*1000))
  return dayDiff > 1
    ? `${dayDiff} DAYS AGO`
    : `${dayDiff} DAY AGO`
}

const ReviewDate = ({ date }) => (
  <View style={styles.container}>
    <Text style={styles.date}>
      { renderRelativeDate(new Date(date)) }
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
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
