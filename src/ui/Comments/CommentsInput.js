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
      height: 50,
      isFocused: false,
      commentText: ''
    }

    this._onSend = this._onSend.bind(this)
    this._onBlur = this._onBlur.bind(this)
    this._onFocus = this._onFocus.bind(this)
    this._onChangeText = this._onChangeText.bind(this)
    this._onContentSizeChange = this._onContentSizeChange.bind(this)
  }

  _onChangeText (commentText) {
    this.setState({
      commentText
    })
  }

  _onContentSizeChange (event) {
    this.setState({
      height: event.nativeEvent.contentSize.height
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
    this.setState({ commentText: '' })
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
        <View style={[styles.inputContainer, { height: Math.max(50, this.state.height) }]}>
          <TextInput
            value={this.state.commentText}
            multiline
            selectTextOnFocus
            onChangeText={this._onChangeText}
            onContentSizeChange={this._onContentSizeChange}
            placeholder='Add a comment...'
            onFocus={this._onFocus}
            enablesReturnKeyAutomatically
            onBlur={this._onBlur}
            style={styles.input}
            underlineColorAndroid='transparent'
          />

          { this._renderPostButton() }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  inputContainer: {
    height: 50,
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
