import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Verify extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Hello, world!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
})

export default Verify
