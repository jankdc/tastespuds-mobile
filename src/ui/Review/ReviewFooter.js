import React from 'react';
import { View, StyleSheet } from 'react-native';

import ReviewMenu from './ReviewMenu';
import ReviewRating from './ReviewRating';

const ReviewFooter = () => (
  <View style={styles.container}>
    <ReviewMenu />
    <ReviewRating />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  }
});

export default ReviewFooter;
