import React from 'react'
import {
  StyleSheet,
  TextInput,
  Button,
  View
} from 'react-native'

class AddReviewPlace extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      place: null
    }
  }

  componentDidMount () {

  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this._onChangeText}
          disabled
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {

  }
})

AddReviewPlace.navigationOptions = {
  headerLeft: (props) => <Button {...props} title='Cancel' />,
  title: '🏘️ Place'
}

export default AddReviewPlace
