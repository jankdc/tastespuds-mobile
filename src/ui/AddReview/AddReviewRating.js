import React from 'react'
import { AirbnbRating as Rating } from 'react-native-ratings'
import { View, Text, StyleSheet } from 'react-native'

const AddReviewRating = ({ disabled, onRatingChange }) => (
  <View>
    <Text style={styles.label}>✨ Rating</Text>
    <View style={styles.inputContainer}>
      <Rating
        showRating
        imageSize={40}
        style={styles.input}
        onFinishRating={onRatingChange}
      />
    </View>
  </View>
)

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
