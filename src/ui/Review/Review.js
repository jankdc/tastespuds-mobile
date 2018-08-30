import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ReviewHeader from './ReviewHeader';
import ReviewFooter from './ReviewFooter';
import ReviewBody from './ReviewBody';

const Review = ({user}) => (
  <View style={styles.container}>
    <ReviewHeader user={user} />
    <ReviewBody />
    <ReviewFooter />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'red'
  }
});

export default Review;
