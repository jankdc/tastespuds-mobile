import React from 'react'
import { View, StyleSheet } from 'react-native'

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        Login
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

export default Login
