import React from 'react'

import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  Button,
  Text,
  View
} from 'react-native'

import SearchPlaceList from '../SearchPlaceList'

class AddReviewPlace extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      search: null
    }

    this._onSubmit = this._onSubmit.bind(this)
    this._onSelect = this._onSelect.bind(this)
    this._onChangeText = this._onChangeText.bind(this)
  }

  componentWillUnmount () {
    this.props.onClear()
  }

  _onSubmit () {
    this.props.onSearch(this.state.search)
  }

  _onSelect (selectedPlace) {
    this.props.navigation.navigate('AddReview', {
      selectedPlace
    })
  }

  _onChangeText (text) {
    this.setState({ search: text })
  }

  _renderSearch () {
    if (this.props.searchedPlaces === null) {
      return null
    }

    return (
      <View>
        <Text style={styles.label}>🔍 Results</Text>

        <SearchPlaceList
          onSelect={this._onSelect}
          searchResults={this.props.searchedPlaces}
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
            placeholder='Search the place here...'
            onChangeText={this._onChangeText}
            returnKeyType='search'
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
  title: 'Search Place'
}

export default AddReviewPlace
