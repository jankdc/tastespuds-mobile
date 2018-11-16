import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import UserProfileGalleryRow from './UserProfileGalleryRow'

function sliceArrayToPieces (array, numOfColumns) {
  const numOfRows = Math.ceil(array.length / numOfColumns)

  const pieces = []
  for (let index = 0; index < numOfRows; index++) {
    pieces.push(array.slice(index * numOfColumns, (index + 1) * numOfColumns))
  }

  return pieces
}

const NUM_COLUMNS = 3

class UserProfileGallery extends Component {
  constructor (props) {
    super(props)

    this.state = {
      width: null
    }

    this._onLayout = this._onLayout.bind(this)
  }

  _onLayout (evt) {
    this.setState({
      width: evt.nativeEvent.layout.width
    })
  }

  _renderGallery () {
    if (!this.state.width) {
      return null
    }

    const rows = sliceArrayToPieces(this.props.reviews, NUM_COLUMNS)
    const rowHeight = this.state.width / NUM_COLUMNS

    return rows.map((columns, index) =>
      <UserProfileGalleryRow
        onPress={this.props.onPress}
        columns={columns}
        size={rowHeight}
        key={index}
      />
    )
  }

  render () {
    return (
      <View style={styles.container} onLayout={this._onLayout}>
        { this._renderGallery() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default UserProfileGallery
