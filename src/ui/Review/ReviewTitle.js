import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReviewTitle = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Margherita Pizza</Text>
    <Text style={styles.place}>Franco Manca</Text>
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
    marginTop: 2,
    marginLeft: 12,
    color: '#8B0000',
    fontSize: 12,
    fontWeight: '700'
  }
});

export default ReviewTitle;
