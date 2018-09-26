import React from 'react'
import { Provider } from 'react-redux'

import store from './src/store'
import BootNavigation from './src/nav/BootNavigation'
import { setTopLevelNavigator } from './src/nav/NavigationService'

const App = () => (
  <Provider store={store}>
    <BootNavigation ref={setTopLevelNavigator} />
  </Provider>
)

export default App
