import React, { Component } from 'react'

import {
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import { Entypo } from '@expo/vector-icons'

class UserProfileLogoutOptions extends Component {
  render () {
    const props = this.props
    return (
      <TouchableOpacity
        {...props}
        style={[props.style, styles.container]}
      >
        <Entypo
          name='dots-three-vertical'
          size={18}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  }
})

export default UserProfileLogoutOptions
