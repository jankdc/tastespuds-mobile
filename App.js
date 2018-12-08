import React from 'react'
import Sentry from 'sentry-expo'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'
import { SENTRY_DSN } from 'react-native-dotenv'

import store from './src/store'
import BootNavigation from './src/nav/BootNavigation'
import { setTopLevelNavigator } from './src/nav/NavigationService'

// Remove this once Sentry is correctly setup.
Sentry.enableInExpoDevelopment = true

Sentry.config(SENTRY_DSN).install()

class App extends React.Component {
  componentDidMount () {
    StatusBar.setBarStyle('dark-content')
  }

  render () {
    return (
      <Provider store={store}>
        <BootNavigation ref={setTopLevelNavigator} />
      </Provider>
    )
  }
}

export default App
