import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { StyleSheet, View, Text } from 'react-native'

const options = {
  top: {
    Icon: Entypo,
    iconName: 'chevron-up'
  },
  new: {
    Icon: Entypo,
    iconName: 'chevron-up'
  },
  popular: {
    Icon: Entypo,
    iconName: 'chevron-up'
  }
}

const SearchSort = ({ sortBy }) => {
  const { Icon, iconName } = sortBy ? options[sortBy] : options.top

  return (
    <View style={styles.container}>
      <Icon
        name={iconName}
        size={25}
        style={styles.icon}
        color='grey'
      />

      <Text style={styles.text}>
        { sortBy.toUpperCase() }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {

  },
  text: {
    fontWeight: 'bold',
    fontSize: 10,
    color: 'grey'
  }
})

export default SearchSort
