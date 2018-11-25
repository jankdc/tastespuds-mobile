import React from 'react'
import { View, StyleSheet } from 'react-native'

import ReviewMenu from './ReviewMenu'
import ReviewDate from './ReviewDate'
import ReviewLikes from './ReviewLikes'
import ReviewRating from './ReviewRating'
import ReviewContent from './ReviewContent'
import ReviewHighlight from './ReviewHighlight'
import ReviewSuggestion from './ReviewSuggestion'

class ReviewFooter extends React.Component {
  constructor (props) {
    super(props)

    this._onLike = this._onLike.bind(this)
    this._onUnlike = this._onUnlike.bind(this)
  }

  _onLike () {
    this.props.onLike()
  }

  _onUnlike () {
    this.props.onUnlike()
  }

  render () {
    const { onComment, review } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.mainActionsAndRating}>
          <ReviewMenu
            liked={!!review.context.caller_like_id}
            onLike={this._onLike}
            onUnlike={this._onUnlike}
            onComment={onComment}
          />

          <ReviewRating
            rating={review.rating}
          />
        </View>

        <ReviewLikes
          likes={review.num_of_likes}
        />

        <ReviewContent
          username={review.user.username}
          content={review.content}
        />

        <ReviewHighlight
          highlight={review.highlight}
        />

        <ReviewSuggestion
          suggestion={review.suggestion}
        />

        <ReviewDate
          date={review.creation_date}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 10
  },
  mainActionsAndRating: {
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  }
})

export default ReviewFooter
