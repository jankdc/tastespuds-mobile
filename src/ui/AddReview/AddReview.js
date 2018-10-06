import React from 'react'

import {
  View,
  Button,
  Keyboard,
  StyleSheet
} from 'react-native'

import AddReviewButton from './AddReviewButton'
import AddReviewRating from './AddReviewRating'
import AddReviewSummary from './AddReviewSummary'

class AddReview extends React.Component {
  constructor (props) {
    super(props)

    this._onDone = this._onDone.bind(this)
    this._onSummaryBlur = this._onSummaryBlur.bind(this)
    this._onSummaryFocus = this._onSummaryFocus.bind(this)
    this._onRatingChange = this._onRatingChange.bind(this)
  }

  componentDidMount () {
    this.props.navigation.setParams({
      isEditingReview: false
    })
  }

  _onDone () {
    console.log('done')
  }

  _onSummaryBlur () {
    this.props.navigation.setParams({
      isEditingReview: false
    })
  }

  _onSummaryFocus () {
    this.props.navigation.setParams({
      isEditingReview: true
    })
  }

  _onRatingChange () {

  }

  _renderOtherFields () {
    const isEditingReview = this.props.navigation.getParam('isEditingReview', false)

    if (isEditingReview) {
      return (
        <View style={styles.shadowContainer} pointerEvents='none' />
      )
    }

    return (
      <View style={styles.subContainer}>
        <AddReviewRating onRatingChange={this._onRatingChange} />
        <View style={styles.addReviewButtonContainer}>
          <AddReviewButton disabled={isEditingReview} />
        </View>
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <AddReviewSummary
          onBlur={this._onSummaryBlur}
          onFocus={this._onSummaryFocus}
        />

        { this._renderOtherFields() }
      </View>
    )
  }
}

AddReview.navigationOptions = ({ navigation }) => {
  const isEditingReview = navigation.getParam('isEditingReview', false)

  if (isEditingReview) {
    return {
      headerLeft: null,
      headerRight: <Button title='Done' onPress={Keyboard.dismiss} />,
      title: '🍴 Write a review'
    }
  }

  return {
    headerLeft: (props) => <Button {...props} title='Cancel' />,
    title: 'New Review'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subContainer: {
    flex: 1
  },
  shadowContainer: {
    flex: 1,
    opacity: 0.6,
    backgroundColor: 'black'
  },
  addReviewButtonContainer: {
    marginTop: 15,
    paddingHorizontal: 15
  }
})

export default AddReview
