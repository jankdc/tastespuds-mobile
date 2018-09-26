import React from 'react'
import { AppLoading, Font } from 'expo'
import { EvilIcons, Ionicons } from '@expo/vector-icons'

function cacheFonts (fonts) {
  return fonts.map(font => Font.loadAsync(font))
}

class Boot extends React.Component {
  constructor(props) {
    super(props)
    this._boot = this._boot.bind(this)
  }

  async _boot () {
    const fontAssets = cacheFonts([
      Ionicons.font,
      EvilIcons.font,
      { 'baloo': require('../../../assets/baloo/Baloo-Regular.ttf') }
    ])

    await Promise.all([...fontAssets])
  }

  render () {
    return (
      <AppLoading
        startAsync={this._boot}
        onFinish={this.props.onBoot}
      />
    )
  }
}

export default Boot
