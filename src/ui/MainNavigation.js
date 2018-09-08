import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import HomeNavigation from './HomeNavigation';

export default createBottomTabNavigator(
  {
    Home: HomeNavigation,
    Search: View,
    Review: View,
    Messages: View,
    Profile: View
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }
  }
);
