import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation';

import Home from './Home';

const HomeNavigation = createStackNavigator({
  Home: {
    screen: Home
  }
});

HomeNavigation.navigationOptions = {
  tabBarIcon: ({ tintColor }) => {
    return <Ionicons name="md-home" size={30} color={tintColor} />;
  }
};

export default HomeNavigation;
