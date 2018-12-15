import React from 'react'

import {
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Platform,
  Button,
  Text,
  View
} from 'react-native'

import SearchPlaceList from '../SearchPlaceList'

class AddReviewPlace extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      search: ''
    }

    this._onSelect = this._onSelect.bind(this)
    this._onSearch = this._onSearch.bind(this)
    this._onRegister = this._onRegister.bind(this)
    this._onChangeText = this._onChangeText.bind(this)
  }

  componentDidMount () {
    this.props.onFocus()
  }

  componentWillUnmount () {
    this.props.onClear()
  }

  _onSearch () {
    if (this.state.search) {
      this.props.onSearch(this.state.search)
    } else {
      this.props.onEmpty()
    }
  }

  _onSelect (selectedPlace) {
    this.props.navigation.navigate('AddReview', {
      selectedPlace
    })
  }

  _onRegister () {
    this.props.navigation.navigate('AddNewPlace', {
      name: this.state.search
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
      <View style={{ flex: 1 }}>
        <Text style={styles.label}>🔍 Suggestions</Text>

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
            autoCorrect
            placeholder='Search the place here...'
            onChangeText={this._onChangeText}
            returnKeyType='search'
            clearButtonMode='while-editing'
            onSubmitEditing={this._onSearch}
            underlineColorAndroid='transparent'
            contextMenuHidden
          />

          { this._renderLoading() }
        </View>

        { this._renderSearch() }

        {
          this.state.search !== '' &&
          <TouchableOpacity
            style={styles.registerItemButton}
            onPress={this._onRegister}
          >
            <Text style={styles.registerItemText}>Add New Item</Text>
          </TouchableOpacity>
        }
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
  },
  registerItemButton: {
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 20,
    width: '100%'
  },
  registerItemText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

AddReviewPlace.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: Platform.select({
      ios: (props) => (
        <Button
          {...props}
          title='Cancel'
          onPress={() => navigation.navigate('AddReview')}
        />
      ),
      android: null
    }),
    title: 'Choose Place'
  }
}

export default AddReviewPlace
