import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Home from './Home';

export default createBottomTabNavigator(
  {
    Home,
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
    },
  }
);
