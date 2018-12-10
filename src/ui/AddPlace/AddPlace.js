import React from 'react'

import { View, StyleSheet } from 'react-native'

import AddPlaceMap from './AddPlaceMap'
import AddPlaceList from './AddPlaceList'
import AddPlaceSearch from './AddPlaceSearch'

class AddPlace extends React.Component {
  componentDidMount () {
    // this.props.onFocus()
  }

  render () {
    return (
      <View style={styles.container}>
        <AddPlaceMap
          places={[]}
        />

        <AddPlaceSearch
          onSearch={this._onSearch}
        />

        <AddPlaceList
          places={[]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  }
})

export default AddPlace
