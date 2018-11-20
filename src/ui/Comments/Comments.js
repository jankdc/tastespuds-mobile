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

  render () {
    const { comments, isLoading } = this.props

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
          keyExtractor={({ id }) => id}
        />
        <CommentsInput />
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
    flex: 1
  }
})

export default Comments
