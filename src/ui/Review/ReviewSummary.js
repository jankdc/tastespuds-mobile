import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReviewSummary = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Review Summary</Text>
    <Text style={styles.summary}>🎉🎉🎉 Really good quality for its price!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  heading: {
    marginLeft: 12,
    fontWeight: 'bold',
    fontSize: 12
  },
  summary: {
    marginLeft: 12,
    marginTop: 5,
    fontSize: 12
  }
});

export default ReviewSummary;
