import React from 'react';
import { AppLoading, Font } from 'expo';
import { EvilIcons, Ionicons } from '@expo/vector-icons';

import MainNavigation from './src/ui/MainNavigation';

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class App extends React.Component {
  state = {
    isReady: false
  };

  async _loadAssetsAsync() {
    const fontAssets = cacheFonts([
      Ionicons.font,
      EvilIcons.font,
      { 'baloo': require('./assets/baloo/Baloo-Regular.ttf') }
    ]);

    await Promise.all([...fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return <MainNavigation />;
  }
}
