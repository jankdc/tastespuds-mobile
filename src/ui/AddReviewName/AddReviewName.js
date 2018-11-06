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

    this._onSelect = this._onSelect.bind(this)
    this._onRegister = this._onRegister.bind(this)
    this._onChangeText = this._onChangeText.bind(this)
  }

  componentDidMount () {
    const selectedPlace = this.props.navigation.getParam('selectedPlace')
    if (selectedPlace) {
      this.props.onFocus(selectedPlace)
    }
  }

  componentWillUnmount () {
    this.props.onClear()
  }

  _onSelect (selectedItem) {
    this.props.navigation.navigate('AddReview', {
      selectedItem
    })
  }

  _onRegister () {
    const selectedPlace = this.props.navigation.getParam('selectedPlace')
    this.props.navigation.navigate('AddReview', {
      selectedItem: {
        name: this.state.search,
        place_id: selectedPlace.id
      }
    })
  }

  _onChangeText (text) {
    this.setState({ search: text })
  }

  _filterByName () {
    return fuzzysort
      .go(this.state.search, this.props.items, {
        key: 'name',
        allowTypo: true
      })
      .map(result => result.obj)
  }

  _renderSearch () {
    if (this.props.items === null) {
      return null
    }

    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.label}>🔍 Suggestions</Text>

        <SearchNameList
          onSelect={this._onSelect}
          onRegister={this._onRegister}
          searchResults={this.state.search
            ? this._filterByName()
            : this.props.items
          }
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
            autoCorrect
            placeholder='Search the item here...'
            onChangeText={this._onChangeText}
            returnKeyType='done'
            clearButtonMode='while-editing'
            contextMenuHidden
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
