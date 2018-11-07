import React from 'react'

import {
  ActivityIndicator,
  StyleSheet,
  FlatList,
  View
} from 'react-native'

import { Permissions, Location } from 'expo'

import SearchMenu from './SearchMenu'
import SearchItem from './SearchItem'

const ItemSeparator = () => (
  <View style={styles.separator} />
)

class Search extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      location: null,
      isReady: false,
      level: 'city',
      city: 'Brighton',
      sort: 'top'
    }
  }

  componentDidMount () {
    this._onFocus()
  }

  async _onFocus () {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)

    if (status !== 'granted') {
      return this._updateSearch({ isReady: true })
    }

    const { coords } = await Location.getCurrentPositionAsync()
    const [{ city }] = await Location.reverseGeocodeAsync({
      latitude: coords.latitude,
      longitude: coords.longitude
    })

    this._updateSearch({
      location: {
        latitude: coords.latitude,
        longitude: coords.longitude
      },
      isReady: true,
      city
    })
  }

  _updateSearch (state = {}) {
    this.setState(state)
    this.props.onFocus({
      city: this.state.city,
      sort: this.state.sort
    })
  }

  _renderSearchList () {
    if (!this.state.isReady) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <FlatList
        ItemSeparatorComponent={ItemSeparator}

        keyExtractor={(item) =>
          `${item.id}`
        }

        renderItem={({ item, index }) => (
          <SearchItem
            item={item}
            ranking={index + 1}
            location={this.state.location}
          />
        )}

        style={styles.list}

        data={this.props.items}
      />
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <SearchMenu
          level={this.state.level}
          sort={this.state.sort}
          city={this.state.city}
        />

        { this._renderSearchList() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  separator: {
    alignSelf: 'center',
    marginVertical: 5
  }
})

export default Search
