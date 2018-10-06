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
        <View style={styles.inputContainer}>
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
  inputContainer: {
    padding: 10,
    backgroundColor: 'white'
  }
})

export default AddReviewRating
