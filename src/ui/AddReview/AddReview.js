import React from 'react'

import {
  View,
  Button,
  Keyboard,
  TextInput,
  StyleSheet
} from 'react-native'

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
      onDone: this._onDone,
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
        <View style={styles.summaryContainer}>
          <TextInput
            style={styles.summaryInput}
            onBlur={this._onSummaryBlur}
            onFocus={this._onSummaryFocus}
            multiline
            placeholder='Write a review...'
          />
        </View>
        <View style={this.state.isEditingReview ? styles.shadowContainer : styles.subContainer} />
      </View>
    )
  }
}

AddReview.navigationOptions = ({ navigation }) => {
  const isEditingReview = navigation.getParam('isEditingReview', false)
  const onDone = navigation.getParam('onDone', () => {})

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
    headerRight: <Button title='Share' onPress={onDone} />,
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
  }
})

export default AddReview
