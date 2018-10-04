import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

class AddReview extends React.Component {
  render () {
    return (
      <View style={styles.container} />
    )
  }
}

AddReview.navigationOptions = {
  headerLeft: (props) => (
    <Button
      {...props}
      title='Cancel'
    />
  )
}

const styles = StyleSheet.create({
  container: {

  }
})

export default AddReview
