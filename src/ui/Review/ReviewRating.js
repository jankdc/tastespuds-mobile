import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

const ReviewRating = () => (
  <View style={styles.container}>
    <Ionicons
      name="ios-star-outline"
      size={28}
      color="#FFBF00"
    />
    <Text style={styles.number}>4</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 12,
    alignItems: 'center'
  },
  number: {
    marginLeft: 8,
    fontWeight: 'bold'
  }
});

export default ReviewRating;
