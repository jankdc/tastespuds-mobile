import React from 'react';
import { View, StyleSheet } from 'react-native';

import ReviewMenu from './ReviewMenu';
import ReviewLikes from './ReviewLikes';
import ReviewTitle from './ReviewTitle';
import ReviewRating from './ReviewRating';
import ReviewSummary from './ReviewSummary';

const ReviewFooter = () => (
  <View>
    <View style={styles.mainActionsAndRating}>
      <ReviewMenu />
      <ReviewRating />
    </View>
    <ReviewLikes />
    <ReviewTitle />
    <ReviewSummary />
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
