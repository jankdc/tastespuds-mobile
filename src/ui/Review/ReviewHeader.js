import React from 'react';
import Image from 'react-native-image-progress';
import { StyleSheet, View, Text } from 'react-native';

const ReviewHeader = ({user}) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{uri: 'https://via.placeholder.com/150x150'}}
      imageStyle={{borderRadius: 15}}
    />
    <Text style={styles.name}>jankdc</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
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
    fontWeight: 'bold',
    fontSize: 12
  }
});

export default ReviewHeader;
