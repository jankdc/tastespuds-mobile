import { createSwitchNavigator } from 'react-navigation'

import Boot from '../ui/Boot'
import AppNavigation from './AppNavigation'
import LoginNavigation from './LoginNavigation'

export default createSwitchNavigator(
  {
    Boot,
    App: AppNavigation,
    Login: LoginNavigation
  },
  {
    initialRouteName: 'Boot'
  }
)
