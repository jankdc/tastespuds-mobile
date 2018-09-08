import React from 'react';
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
  title: 'Tastespuds'
};

export default Home;
