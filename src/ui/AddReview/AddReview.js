import React from 'react'

import {
  View,
  Button,
  Keyboard,
  ScrollView,
  StyleSheet
} from 'react-native'

import AddReviewButton from './AddReviewButton'
import AddReviewRating from './AddReviewRating'
import AddReviewSummary from './AddReviewSummary'
import AddReviewFieldButton from './AddReviewFieldButton'

class AddReview extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      rating: 3,
      summary: ''
    }

    this._onShare = this._onShare.bind(this)
    this._onGetItem = this._onGetItem.bind(this)
    this._onGetPlace = this._onGetPlace.bind(this)
    this._onSummaryBlur = this._onSummaryBlur.bind(this)
    this._onSummaryText = this._onSummaryText.bind(this)
    this._onSummaryFocus = this._onSummaryFocus.bind(this)
    this._onRatingChange = this._onRatingChange.bind(this)
  }

  componentDidMount () {
    this.props.navigation.setParams({
      isEditingReview: false
    })
  }

  _onShare () {
    const selectedItem = this.props.navigation.getParam('selectedItem')
    const selectedPlace = this.props.navigation.getParam('selectedPlace')

    this.props.onShare({
      item: selectedItem,
      rating: this.state.rating,
      content: this.state.summary
    })
  }

  _onGetItem () {
    const selectedPlace = this.props.navigation.getParam('selectedPlace')
    this.props.navigation.navigate('AddReviewName', {
      selectedPlace
    })
  }

  _onGetPlace () {
    this.props.navigation.navigate('AddReviewPlace')
  }

  _onSummaryText (summary) {
    this.setState({
      summary
    })
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

  _onRatingChange (rating) {
    this.setState({ rating })
  }

  _isReadyToShare() {
    const { rating, summary } = this.state
    const selectedItem = this.props.navigation.getParam('selectedItem', null)
    const selectedPlace = this.props.navigation.getParam('selectedPlace', null)
    return !!rating && !!summary && !!selectedItem && !!selectedPlace
  }

  _renderOtherFields () {
    const selectedItem = this.props.navigation.getParam('selectedItem', null)
    const selectedPlace = this.props.navigation.getParam('selectedPlace', null)
    const isEditingReview = this.props.navigation.getParam('isEditingReview', false)

    if (isEditingReview) {
      return (
        <View style={styles.shadowContainer} pointerEvents='none' />
      )
    }

    return (
      <View style={styles.subContainer}>
        <AddReviewFieldButton
          label='🏘️ Place'
          value={selectedPlace && selectedPlace.name}
          onPress={this._onGetPlace}
          placeholder="Enter the place..."
        />

        <AddReviewFieldButton
          label='🍔 Item'
          value={selectedItem && selectedItem.name}
          onPress={this._onGetItem}
          disabled={selectedPlace === null}
          placeholder="Enter the item..."
        />

        <AddReviewRating
          onRatingChange={this._onRatingChange}
        />

        <View style={styles.addReviewButtonContainer}>
          <AddReviewButton
            onPress={this._onShare}
            disabled={isEditingReview || !this._isReadyToShare()}
          />
        </View>
      </View>
    )
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <AddReviewSummary
          onBlur={this._onSummaryBlur}
          onFocus={this._onSummaryFocus}
          onChangeText={this._onSummaryText}
        />

        { this._renderOtherFields() }
      </ScrollView>
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
    flex: 1,
    paddingBottom: 20
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
