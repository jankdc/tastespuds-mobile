import React, { Component } from 'react'

import {
  ActivityIndicator,
  StyleSheet,
  FlatList,
  View,
  KeyboardAvoidingView
} from 'react-native'

import Comment from './Comment'
import CommentsInput from './CommentsInput'

class Comments extends Component {
  constructor (props) {
    super(props)

    this._onSend = this._onSend.bind(this)
  }

  componentDidMount () {
    const review = this.props.navigation.getParam('review')
    this.props.onFocus(review.id)
  }

  componentWillUnmount () {
    this.props.onClear()
  }

  _renderLoading () {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <ActivityIndicator />
      </View>
    )
  }

  _onSend (content) {
    const review = this.props.navigation.getParam('review')
    this.props.onSend({
      reviewId: review.id,
      content
    })
  }

  render () {
    const { comments, isLoading, isSending } = this.props

    if (isLoading || !comments) {
      return this._renderLoading()
    }

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <FlatList
          data={comments}
          style={styles.commentsList}
          renderItem={({ item: comment }) => (
            <Comment comment={comment} />
          )}
          keyExtractor={({ id }) => `${id}`}
        />

        <CommentsInput onSend={this._onSend} isSending={isSending} />
      </KeyboardAvoidingView>
    )
  }
}

Comments.navigationOptions = {
  title: 'Comments'
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  commentsList: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default Comments
