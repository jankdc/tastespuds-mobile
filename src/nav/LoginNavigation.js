import { createStackNavigator } from 'react-navigation'

import Login from '../ui/Login'
import Verify from '../ui/Verify'

const LoginNavigation = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Verify: {
      screen: Verify
    }
  }
)

export default LoginNavigation
