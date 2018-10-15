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

import SearchNameList from '../SearchNameList'

class AddReviewName extends React.Component {
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
    const selectedPlace = this.props.navigation.getParam('selectedPlace')
    this.props.onSearch(selectedPlace)
  }

  _onSelect (selectedItem) {
    this.props.navigation.navigate('AddReview', {
      selectedName: selectedItem.name
    })
  }

  _onChangeText (text) {
    this.setState({ search: text })
  }

  _renderSearch () {
    if (this.props.items === null || this.state.search === null) {
      return null
    }

    const filtered = fuzzysort.go(this.state.search, this.props.items, {
      key: 'name',
      limit: 5,
      allowTypo: true,
      threshold: -10000 // don't return bad results
    })

    return (
      <View>
        <Text style={styles.label}>🔍 Results</Text>

        <SearchNameList
          onSelect={this._onSelect}
          searchResults={filtered}
        />
      </View>
    )
  }

  _renderLoading () {
    if (!this.props.isGetting) {
      return null
    }

    return (
      <ActivityIndicator size='small' color='grey' />
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>🍔 Item</Text>
        <View style={styles.inputContainer}>
          <TextInput
            ref={ref => { this.input = ref }}
            style={styles.input}
            autoFocus
            placeholder='Search an item here...'
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

AddReviewName.navigationOptions = {
  headerLeft: (props) => <Button {...props} title='Cancel' />,
  title: 'Search Name'
}

export default AddReviewName
