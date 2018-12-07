import React from 'react'

import {
  View,
  Button,
  Keyboard,
  Platform,
  ScrollView,
  StyleSheet
} from 'react-native'

import AddReviewButton from './AddReviewButton'
import AddReviewRating from './AddReviewRating'
import AddReviewSummary from './AddReviewSummary'
import AddReviewHighlight from './AddReviewHighlight'
import AddReviewSuggestion from './AddReviewSuggestion'
import AddReviewFieldButton from './AddReviewFieldButton'

class AddReview extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      rating: 3,
      summary: '',
      highlight: ''
    }

    this._onShare = this._onShare.bind(this)
    this._onGetItem = this._onGetItem.bind(this)
    this._onGetPlace = this._onGetPlace.bind(this)
    this._onSummaryBlur = this._onSummaryBlur.bind(this)
    this._onSummaryText = this._onSummaryText.bind(this)
    this._onSummaryFocus = this._onSummaryFocus.bind(this)
    this._onRatingChange = this._onRatingChange.bind(this)
    this._onHighlightText = this._onHighlightText.bind(this)
    this._onSuggestionText = this._onSuggestionText.bind(this)
  }

  componentDidMount () {
    this.props.navigation.setParams({
      isEditingReview: false
    })
  }

  _onShare () {
    const imageData = this.props.navigation.getParam('imageData')
    const selectedItem = this.props.navigation.getParam('selectedItem')

    this.props.onShare({
      item: selectedItem,
      rating: this.state.rating,
      content: this.state.summary,
      highlight: this.state.highlight,
      suggestion: this.state.suggestion,
      imageData
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

  _onHighlightText (highlight) {
    this.setState({
      highlight
    })
  }

  _onSuggestionText (suggestion) {
    this.setState({
      suggestion: suggestion === '' ? undefined : suggestion
    })
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

  _isReadyToShare () {
    const { rating, summary, highlight } = this.state
    const selectedItem = this.props.navigation.getParam('selectedItem', null)
    const selectedPlace = this.props.navigation.getParam('selectedPlace', null)
    return !!rating && !!summary && !!selectedItem && !!selectedPlace && !!highlight
  }

  _renderOtherFields () {
    const { rating, highlight, suggestion } = this.state
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
        <AddReviewHighlight
          onChangeText={this._onHighlightText}
          highlight={highlight}
        />

        <AddReviewSuggestion
          onChangeText={this._onSuggestionText}
          suggestion={suggestion}
        />

        <AddReviewFieldButton
          label='🏘️ Place'
          value={selectedPlace && selectedPlace.name}
          onPress={this._onGetPlace}
          placeholder='Enter the place...'
        />

        <AddReviewFieldButton
          label='🍔 Item'
          value={selectedItem && selectedItem.name}
          onPress={this._onGetItem}
          disabled={selectedPlace === null}
          placeholder='Enter the item...'
        />

        <AddReviewRating
          onRatingChange={this._onRatingChange}
          rating={rating}
        />
      </View>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <AddReviewSummary
            onBlur={this._onSummaryBlur}
            onFocus={this._onSummaryFocus}
            onChangeText={this._onSummaryText}
          />

          { this._renderOtherFields() }
        </ScrollView>

        <AddReviewButton
          onPress={this._onShare}
          loading={this.props.isAddingReview}
          disabled={!this._isReadyToShare() || this.props.isAddingReview}
        />
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
    headerLeft: Platform.select({
      ios: (props) => <Button {...props} title='Cancel' />,
      android: null
    }),
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
  }
})

export default AddReview
