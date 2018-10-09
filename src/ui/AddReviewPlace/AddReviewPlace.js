import React from 'react'
import {
  StyleSheet,
  TextInput,
  Button,
  Text,
  View
} from 'react-native'

import SearchList from '../SearchList'

class AddReviewPlace extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      place: null,
      searchResults: [
        {
          id: 'some-id'
        }
      ]
    }

    this._onBlur = this._onBlur.bind(this)
    this._onFocus = this._onFocus.bind(this)
  }

  componentDidMount () {

  }

  _onBlur () {

  }

  _onFocus () {

  }

  _renderSearch () {
    if (this.state.searchResults === null) {
      return null
    }

    return (
      <View>
        <Text style={styles.label}>
          🔍 Results
        </Text>
        <SearchList
          searchResults={this.state.searchResults}
        />
      </View>
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
            onBlur={this._onBlur}
            onFocus={this._onFocus}
            autoFocus
            placeholder='Search the place here...'
          />
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
