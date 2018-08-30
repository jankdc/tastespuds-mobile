import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading, Font } from 'expo';
import { EvilIcons, Ionicons } from '@expo/vector-icons';

import Review from './src/ui/Review';

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class App extends React.Component {
  state = {
    isReady: false
  };

  async _loadAssetsAsync() {
    const fontAssets = cacheFonts([Ionicons.font, EvilIcons.font]);
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

    return (
      <View style={styles.container}>
        <Review
          user={{
            name: 'jankdc',
            imgUrl: 'https://via.placeholder.com/150x150'
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
