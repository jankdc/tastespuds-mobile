import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import { withNavigation } from 'react-navigation'

import SearchSort from './SearchSort'
import SearchWithinLocation from './SearchWithinLocation'

class SearchMenu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showLocationOptions: false
    }

    this._onLocationHide = this._onLocationHide.bind(this)
    this._onLocationPress = this._onLocationPress.bind(this)
    this._onLocationOption = this._onLocationOption.bind(this)
  }

  _onLocationHide () {
    this.setState({
      showLocationOptions: false
    })
  }

  _onLocationPress () {
    this.setState({
      showLocationOptions: true
    })
  }

  _onLocationOption (option) {
    this.setState({
      showLocationOptions: false
    })

    this.props.onLocationOption(option)
  }

  render () {
    const { city, level, sort } = this.props

    return (
      <View style={styles.container}>
        <SearchSort sortBy={sort} />

        <SearchWithinLocation
          city={city}
          level={level}
          onPress={this._onLocationPress}
          onOption={this._onLocationOption}
          showOptions={this.state.showLocationOptions}
          onHideOptions={this._onLocationHide}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10
  }
})

export default withNavigation(SearchMenu)
