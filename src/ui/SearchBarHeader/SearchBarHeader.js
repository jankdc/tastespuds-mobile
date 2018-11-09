import React, { PureComponent } from 'react'
import { SearchBar } from 'react-native-elements'
import { StyleSheet, Platform } from 'react-native'
import { SafeAreaView } from 'react-navigation'

class SearchBarHeader extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      search: '',
      searchedText: ''
    }

    this._onClear = this._onClear.bind(this)
    this._onCancel = this._onCancel.bind(this)
    this._onSubmit = this._onSubmit.bind(this)
    this._onChangeText = this._onChangeText.bind(this)
  }

  _onClear () {
    const onClear = this.props.navigation.getParam('onClear')
    onClear()
  }

  _onCancel () {
    this.setState({
      search: this.state.searchedText
    })
  }

  _onSubmit () {
    const onSearch = this.props.navigation.getParam('onSearch')
    onSearch(this.state.search)

    this.setState({
      searchedText: this.state.search
    })
  }

  _onChangeText (search) {
    this.setState({
      search
    })
  }

  render () {
    return (
      <SafeAreaView style={styles.headerContainer}>
        <SearchBar
          value={this.state.search}
          platform={Platform.OS}
          placeholder='Search'
          onCancel={this._onCancel}
          onClear={this._onClear}
          onChangeText={this._onChangeText}
          containerStyle={styles.searchBar}
          returnKeyType='search'
          onSubmitEditing={this._onSubmit}
          cancelButtonTitle='Cancel'
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white'
  },
  searchBar: {
    backgroundColor: 'white'
  }
})

export default SearchBarHeader
