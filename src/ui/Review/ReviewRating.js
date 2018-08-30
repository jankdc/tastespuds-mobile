import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

const ReviewRating = () => (
  <View style={styles.container}>
    <Ionicons
      name="ios-star"
      size={28}
      color="#FFBF00"
    />
    <Text style={styles.number}>9.5</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 12,
    alignItems: 'center'
  },
  number: {
    marginLeft: 4,
    fontWeight: 'bold'
  }
});

export default ReviewRating;
