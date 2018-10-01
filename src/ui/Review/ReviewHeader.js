import React from 'react'
import Image from 'react-native-image-progress'
import { StyleSheet, View, Text } from 'react-native'

const ReviewHeader = ({ user }) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{ uri: 'https://via.placeholder.com/150x150' }}
      imageStyle={{ borderRadius: 15 }}
    />
    <View style={{ flexDirection: 'column' }}>
      <Text style={styles.name}>Margherita Pizza</Text>
      <Text style={styles.place}>Franco Manca</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  image: {
    marginLeft: 10,
    height: 30,
    width: 30
  },
  name: {
    marginLeft: 10,
    fontSize: 16
  },
  place: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 12
  }
})

export default ReviewHeader
