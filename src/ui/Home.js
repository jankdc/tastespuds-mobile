import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import ReviewList from './ReviewList';

const Home = () => (
  <ReviewList
    reviews={[
      {
        id: 'some-review'
      },
      {
        id: 'some-other-review'
      }
    ]}
  />
);

Home.navigationOptions = {
  tabBarIcon: ({ tintColor }) => {
    return <Ionicons name="md-home" size={30} color={tintColor} />;
  }
};

export default Home;
