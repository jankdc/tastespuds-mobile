import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReviewTitle = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Chicken Burger</Text>
    <Text style={styles.place}>Patty and Bun</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 6,
  },
  title: {
    fontSize: 22,
    marginLeft: 12,
  },
  place: {
    marginLeft: 12,
    color: '#8B0000',
    fontSize: 10,
    fontWeight: 'bold'
  }
});

export default ReviewTitle;
