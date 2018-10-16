import React from 'react'

import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  Button,
  Text,
  View
} from 'react-native'

import fuzzysort from 'fuzzysort'

import SearchPlaceList from '../SearchPlaceList'

class AddReviewPlace extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      search: ''
    }

    this._onSelect = this._onSelect.bind(this)
    this._onChangeText = this._onChangeText.bind(this)
  }

  componentDidMount() {
    this.props.onFocus()
  }

  componentWillUnmount () {
    this.props.onClear()
  }

  _onSelect (selectedPlace) {
    this.props.navigation.navigate('AddReview', {
      selectedPlace
    })
  }

  _onChangeText (text) {
    this.setState({ search: text })
  }

  _filterByName () {
    return fuzzysort
      .go(this.state.search, this.props.searchedPlaces, {
        key: 'name',
        allowTypo: true
      })
      .map(result => result.obj)
  }

  _renderSearch () {
    if (this.props.searchedPlaces === null) {
      return null
    }

    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.label}>🔍 Suggestions</Text>

        <SearchPlaceList
          onSelect={this._onSelect}
          searchResults={this.state.search
            ? this._filterByName()
            : this.props.searchedPlaces
          }
        />
      </View>
    )
  }

  _renderLoading () {
    if (!this.props.isSearching) {
      return null
    }

    return (
      <ActivityIndicator size='small' color='grey' />
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>🏘️ Place</Text>
        <View style={styles.inputContainer}>
          <TextInput
            ref={ref => { this.input = ref }}
            style={styles.input}
            autoFocus
            placeholder='Filter the place here...'
            onChangeText={this._onChangeText}
            returnKeyType='done'
            onSubmitEditing={this._onSubmit}
          />

          { this._renderLoading() }
        </View>
        { this._renderSearch() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  label: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    color: 'grey',
    fontSize: 12,
    fontWeight: 'bold'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    padding: 10,
    height: 50,
    backgroundColor: 'white'
  },
  input: {
    flex: 1,
    fontSize: 16
  }
})

AddReviewPlace.navigationOptions = {
  headerLeft: (props) => <Button {...props} title='Cancel' />,
  title: 'Choose Place'
}

export default AddReviewPlace
