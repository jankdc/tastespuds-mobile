import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet
} from 'react-native'

class Login extends React.Component {
  render () {
    const { onLoginPress } = this.props

    return (
      <ImageBackground
        source={require('../../../assets/breakfast-bg.jpg')}
        resizeMode='cover'
        style={styles.container}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tastespuds</Text>
        </View>
        <View style={styles.formContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
            <Text style={styles.loginText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
    fontSize: 40,
    color: 'white'
  },
  formContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  loginButton: {
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 250,
    height: 50,
    padding: 10,
    borderRadius: 5
  },
  loginText: {
    fontWeight: 'bold',
    color: 'white'
  }
})

export default Login
