import React from 'react'
import Image from 'react-native-image-progress'
import { StyleSheet } from 'react-native'

const IMAGE_SIZE = 95

const UserProfileImage = ({ uri }) => (
  <Image
    style={styles.image}
    source={{ uri }}
    imageStyle={{ borderRadius: IMAGE_SIZE / 2 }}
  />
)

const styles = StyleSheet.create({
  container: {

  },
  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE
  }
})

export default UserProfileImage
