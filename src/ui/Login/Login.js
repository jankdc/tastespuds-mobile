import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

class Login extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tastespuds</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.emailForm}
            placeholder='Email address'
          />
          <TouchableOpacity style={styles.loginButton}>
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

Login.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center'
  },
  titleContainer: {
    alignItems: 'center',
    paddingVertical: 30
  },
  title: {
    fontFamily: 'baloo',
    fontSize: 40
  },
  formContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  emailForm: {
    backgroundColor: 'white',
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'gray'
  },
  loginButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 20,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'gray'
  }
})

export default Login
