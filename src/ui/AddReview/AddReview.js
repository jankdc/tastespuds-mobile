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

  render () {
    const isEditingReview = this.props.navigation.getParam('isEditingReview', false)

    return (
      <View style={styles.container}>
        <AddReviewSummary
          onBlur={this._onSummaryBlur}
          onFocus={this._onSummaryFocus}
        />
        <View
          style={isEditingReview ? styles.shadowContainer : styles.subContainer}
          pointerEvents={isEditingReview ? 'none' : 'auto'}
        >
          <AddReviewRating onRatingChange={this._onRatingChange} />
          {
            !isEditingReview &&
            <View style={styles.addReviewButtonContainer}>
              <AddReviewButton disabled={isEditingReview} />
            </View>
          }
        </View>
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
  summaryContainer: {
    backgroundColor: 'white',
    padding: 10,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3'
  },
  summaryInput: {
    flex: 1,
    fontSize: 16
  },
  addReviewButtonContainer: {
    marginTop: 15,
    paddingHorizontal: 15
  }
})

export default AddReview
