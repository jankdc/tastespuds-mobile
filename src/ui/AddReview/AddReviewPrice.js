import React from 'react'

import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'

export const priceRegex = new RegExp(/^(([0-9])|([1-9][0-9]*))(\.[0-9]{2})?$/)

class AddReviewPrice extends React.Component {
  _applyContainerStyle () {
    const { price } = this.props

    if (price.length > 0 && !priceRegex.test(price)) {
      return [
        styles.inputContainer,
        { backgroundColor: '#FFBABA' }
      ]
    }

    return [
      styles.inputContainer
    ]
  }

  _applyInputStyle () {
    const { price } = this.props

    if (price.length > 0 && !priceRegex.test(price)) {
      return [
        styles.input,
        { color: '#D8000C' }
      ]
    }

    return [
      styles.input
    ]
  }

  render () {
    const { price } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.label}>💵 Price (in £)</Text>
        <View style={this._applyContainerStyle()}>
          <TextInput
            style={this._applyInputStyle()}
            value={price}
            onChangeText={this.props.onPriceChange}
            placeholder='2.90'
            clearButtonMode='while-editing'
            underlineColorAndroid='transparent'
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3'
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
    padding: 10,
    height: 50,
    backgroundColor: 'white'
  },
  input: {
    flex: 1,
    color: 'black',
    fontSize: 16
  },
  currencyContainer: {
    backgroundColor: 'red',
    width: 20,
    height: '100%'
  }
})

export default AddReviewPrice
