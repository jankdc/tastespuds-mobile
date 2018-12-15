import React from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const SearchEmptyItem = ({ disabled, onPress }) => (
  <View>
    <View style={styles.placeholder}>
      <Text style={styles.placeholderText}>No results</Text>
    </View>
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
  }
})

export default SearchEmptyItem
