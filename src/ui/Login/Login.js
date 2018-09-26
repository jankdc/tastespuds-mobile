import React from 'react'
import { Text, TextInput, View } from 'react-native'

class Login extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      inputText: null
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            Tastespuds
          </Text>

          <TextInput

          />
        </View>
        <View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray'
  },
  title: {
    fontFamily: 'baloo',
  }
})

export default Login
