import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, View, Text } from 'react-native'

const SearchWithinLocation = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name='location-on'
        size={20}
        style={styles.icon}
        color='grey'
      />

      <Text style={styles.text}>
        LONDON
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15
  },
  icon: {

  },
  text: {
    fontWeight: 'bold',
    fontSize: 10,
    color: 'grey'
  }
})

export default SearchWithinLocation
