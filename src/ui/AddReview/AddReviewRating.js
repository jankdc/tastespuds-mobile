import React from 'react'
import Rating from 'react-native-star-rating'
import { View, Text, StyleSheet } from 'react-native'

class AddReviewRating extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      rating: 3
    }

    this._onRatingChange = this._onRatingChange.bind(this)
  }

  _onRatingChange (rating) {
    this.setState({ rating })
    this.props.onRatingChange(rating)
  }

  render () {
    return (
      <View>
        <Text style={styles.label}>✨ Rating</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>
            Please pick a suitable rating for the item
          </Text>
          <Rating
            disabled={false}
            maxStars={5}
            rating={this.state.rating}
            fullStarColor='#FFBF00'
            emptyStar='star'
            containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            selectedStar={this._onRatingChange}
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
  ratingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  ratingText: {
    paddingBottom: 10,
    color: 'grey',
    fontSize: 13,
    fontWeight: 'bold'
  }
})

export default AddReviewRating
