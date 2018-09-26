import { createStackNavigator } from 'react-navigation'

import Login from '../ui/Login/Login'

const LoginNavigation = createStackNavigator({
  Login: {
    screen: Login
  }
})

export default LoginNavigation
