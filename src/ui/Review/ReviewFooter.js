import React from 'react';
import { View, StyleSheet } from 'react-native';

import ReviewMenu from './ReviewMenu';
import ReviewLikes from './ReviewLikes';
import ReviewRating from './ReviewRating';

const ReviewFooter = () => (
  <View>
    <View style={styles.mainActionsAndRating}>
      <ReviewMenu />
      <ReviewRating />
    </View>
    <ReviewLikes />
  </View>
);

const styles = StyleSheet.create({
  mainActionsAndRating: {
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  }
});

export default ReviewFooter;
