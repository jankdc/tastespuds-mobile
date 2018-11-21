import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

function applyDisabled (disabled) {
  if (!disabled) {
    return null
  }

  return {
    color: 'lightgrey'
  }
}

class CommentsInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isFocused: false,
      commentText: ''
    }

    this._onSend = this._onSend.bind(this)
    this._onBlur = this._onBlur.bind(this)
    this._onFocus = this._onFocus.bind(this)
    this._onChangeText = this._onChangeText.bind(this)
  }

  _onChangeText (commentText) {
    this.setState({
      commentText
    })
  }

  _onFocus () {
    this.setState({
      isFocused: true
    })
  }

  _onBlur () {
    this.setState({
      isFocused: false
    })
  }

  _onSend () {
    this.props.onSend(this.state.commentText)
  }

  _renderPostButton () {
    const disabled = this.state.commentText === ''

    if (this.props.isSending) {
      return (
        <View style={styles.postButtonContainer}>
          <ActivityIndicator />
        </View>
      )
    }

    if (this.state.isFocused) {
      return (
        <TouchableOpacity
          style={styles.postButtonContainer}
          onPress={this._onSend}
          disabled={disabled}
        >
          <Text style={[styles.postButtonTitle, applyDisabled(disabled)]}>
            Post
          </Text>
        </TouchableOpacity>
      )
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            multiline
            selectTextOnFocus
            onChangeText={this._onChangeText}
            placeholder='Add a comment...'
            onFocus={this._onFocus}
            enablesReturnKeyAutomatically
            onBlur={this._onBlur}
            style={styles.input}
          />

          { this._renderPostButton() }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  inputContainer: {
    height: '100%',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'lightgrey',
    paddingVertical: 8,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    fontSize: 12,
    height: '100%',
    flex: 1
  },
  postButtonContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  postButtonTitle: {
    color: '#007aff',
    fontSize: 12
  }
})

export default CommentsInput
