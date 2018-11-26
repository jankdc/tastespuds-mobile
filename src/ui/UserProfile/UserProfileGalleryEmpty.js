import React from 'react'

import {
  StyleSheet,
  View,
  Text
} from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

const UserProfileGalleryEmpty = () => (
  <View style={styles.container}>
    <MaterialIcons
      name='rate-review'
      size={100}
      color='#C0C0C0'
    />
    <Text style={styles.message}>
      No submitted reviews
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    color: 'dimgrey'
  }
})

export default UserProfileGalleryEmpty
