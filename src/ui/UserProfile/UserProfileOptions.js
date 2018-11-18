import React, { Component } from 'react'

import {
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native'

import ActionSheet from 'react-native-actionsheet'

import { Entypo } from '@expo/vector-icons'

const OPTIONS = [
  'Logout',
  'Cancel'
]

class UserProfileLogoutOptions extends Component {
  constructor (props) {
    super(props)

    this._onOption = this._onOption.bind(this)
    this._onShowActionSheet = this._onShowActionSheet.bind(this)
  }

  _onOption (index) {
    const option = OPTIONS[index]

    if (option === 'Logout') {
      this.props.onLogout()
    }
  }

  _onShowActionSheet () {
    this.ActionSheet.show()
  }

  render () {
    const props = this.props

    return (
      <View>
        <TouchableOpacity
          {...props}
          style={[props.style, styles.container]}
          onPress={this._onShowActionSheet}
        >
          <Entypo
            name='dots-three-vertical'
            size={18}
          />
        </TouchableOpacity>

        <ActionSheet
          ref={(o) => { this.ActionSheet = o }}
          options={OPTIONS}
          cancelButtonIndex={1}
          onPress={this._onOption}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  }
})

export default UserProfileLogoutOptions
