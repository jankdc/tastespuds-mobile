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
import SearchBarHeader from '../SearchBarHeader'

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

    this._onSearch = this._onSearch.bind(this)
  }

  componentDidMount () {
    this.props.navigation.setParams({
      onSearch: this._onSearch
    })

    this._onFocus()
  }

  _onSearch (searchText) {
    this._updateSearch({
      keyword: searchText
    })
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
    const newState = {
      ...this.state,
      ...state
    }

    const query = {
      sort: newState.sort
    }

    if (newState.level === 'city') {
      query.city = newState.city
    }

    if (newState.keyword) {
      query.keyword = newState.keyword
    }

    if (newState.level === 'nearby') {
      query.location = `${newState.location.latitude},${newState.location.longitude}`
    }

    this.props.onSearch(query)

    this.setState(newState)
  }

  _renderSearchList () {
    if (!this.state.isReady || this.props.isSearching) {
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

Search.navigationOptions = ({ navigation }) => {
  return {
    header: () => <SearchBarHeader navigation={navigation} />
  }
}

export default Search
