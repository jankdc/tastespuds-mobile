import React from 'react'

import {
  View,
  Button,
  Keyboard,
  StyleSheet
} from 'react-native'

import AddReviewButton from './AddReviewButton'
import AddReviewSummary from './AddReviewSummary'

class AddReview extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isEditingReview: false
    }

    this._onDone = this._onDone.bind(this)
    this._onSummaryBlur = this._onSummaryBlur.bind(this)
    this._onSummaryFocus = this._onSummaryFocus.bind(this)
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
    this.setState({
      isEditingReview: false
    })
    this.props.navigation.setParams({
      isEditingReview: false
    })
  }

  _onSummaryFocus () {
    this.setState({
      isEditingReview: true
    })
    this.props.navigation.setParams({
      isEditingReview: true
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <AddReviewSummary
          onBlur={this._onSummaryBlur}
          onFocus={this._onSummaryFocus}
        />
        <View
          style={this.state.isEditingReview ? styles.shadowContainer : styles.subContainer}
          pointerEvents={this.state.isEditingReview ? 'none' : 'auto'}
        >
          <View style={styles.addReviewButtonContainer}>
            <AddReviewButton disabled={this.state.isEditingReview} />
          </View>
        </View>
      </View>
    )
  }
}

AddReview.navigationOptions = ({ navigation }) => {
  const isEditingReview = navigation.getParam('isEditingReview', false)

  if (isEditingReview) {
    return textFieldConfig('Write Review')
  }

  return {
    headerLeft: (props) => (
      <Button
        {...props}
        title='Cancel'
      />
    ),
    title: 'New Review'
  }
}

const textFieldConfig = (title) => ({
  headerLeft: null,
  headerRight: <Button title='OK' onPress={Keyboard.dismiss} />,
  title
})

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
