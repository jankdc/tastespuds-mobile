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

export default Home;
