import React, { Component } from 'react'
import { Button, ButtonGroup, SearchBar } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'
import { MapView } from 'expo'

const initialRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}

class AddNewPlace extends Component {
  constructor (props) {
    super(props)

    this.state = {
      search: '',
      selectedTypeIndex: 0
    }

    this._onSearch = this._onSearch.bind(this)
    this._onConfirm = this._onConfirm.bind(this)
    this._onChangeType = this._onChangeType.bind(this)
    this._onChangeText = this._onChangeText.bind(this)
  }

  _onSearch () {
    if (this.state.search) {
      this.props.onSearch(this.state.search)
    }
  }

  _onConfirm () {
    console.log('What is the point?')
  }

  _onChangeText (search) {
    this.setState({ search })
  }

  _onChangeType (selectedTypeIndex) {
    this.setState({ selectedTypeIndex })
  }

  render () {
    const name = this.props.navigation.getParam('name')
    const { location, isGeocoding } = this.props

    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapContainer}
          region={{
            ...initialRegion,
            ...(location || {})
          }}
          initialRegion={initialRegion}
        >
          {
            location &&
            <MapView.Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude
              }}
            />
          }
        </MapView>
        <View style={styles.searchContainer}>
          <SearchBar
            lightTheme
            disabled={isGeocoding}
            placeholder='Enter Address Here...'
            showLoading={isGeocoding}
            returnKeyType='search'
            onChangeText={this._onChangeText}
            onSubmitEditing={this._onSearch}
            containerStyle={{
              backgroundColor: 'white'
            }}
          />
        </View>
        <View style={styles.optionsContainer}>
          <View style={styles.typeContainer}>
            <ButtonGroup
              onPress={this._onChangeType}
              buttons={[ 'Restaurant', 'Cafe', 'Bar' ]}
              selectedIndex={this.state.selectedTypeIndex}
            />
          </View>
          <Button
            title={`Submit '${name}'`}
            disabled={location === null}
            disabledStyle={{
              backgroundColor: 'silver'
            }}
            buttonStyle={{
              backgroundColor: 'tomato',
              padding: 10
            }}
            onPress={this._onConfirm}
          />
        </View>
      </View>
    )
  }
}

AddNewPlace.navigationOptions = {
  title: `Add New Place`,
  headerBackTitle: ''
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapContainer: {
    flex: 1
  },
  overlayContainer: {
  },
  searchContainer: {
    top: 0,
    left: 0,
    width: '100%',
    position: 'absolute',
    justifyContent: 'space-between'
  },
  typeContainer: {
    paddingVertical: 10
  },
  optionsContainer: {
    left: 0,
    bottom: 0,
    width: '100%',
    padding: 10,
    position: 'absolute',
    backgroundColor: 'white',
    justifyContent: 'space-between'
  }
})

export default AddNewPlace
