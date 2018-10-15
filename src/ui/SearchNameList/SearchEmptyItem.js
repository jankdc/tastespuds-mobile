import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

const SearchEmptyItem = ({ onPress }) => (
  <View>
    <View style={styles.placeholder}>
      <Text style={styles.placeholderText}>No results</Text>
    </View>

    <TouchableOpacity style={styles.registerItemButton} onPress={onPress}>
      <Text style={styles.registerItemText}>Add New Item</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  placeholder: {
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  placeholderText: {
    fontSize: 15,
    color: 'grey'
  },
  registerItemButton: {
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 3,
    paddingVertical: 20,
    width: '90%'
  },
  registerItemText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default SearchEmptyItem
