import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

import SearchLocationModal from './SearchLocationModal'

const SearchWithinLocation = ({
  showOptions,
  onHideOptions,
  onOption,
  onPress,
  level,
  city
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <SearchLocationModal
        isVisible={showOptions}
        currentOption={level}
        onHideOptions={onHideOptions}
        onOption={onOption}
      />

      <MaterialIcons
        name='location-on'
        size={20}
        style={styles.icon}
        color='grey'
      />

      <Text style={styles.text}>
        { level === 'city' ? city.toUpperCase() : 'NEARBY' }
      </Text>
    </TouchableOpacity>
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
