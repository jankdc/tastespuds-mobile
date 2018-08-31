import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReviewDate = () => (
  <View style={styles.container}>
    <Text style={styles.date}>4 HOURS AGO</Text>
  </View>
);

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
});

export default ReviewDate;
