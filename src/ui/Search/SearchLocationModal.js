import React from 'react'
import Modal from 'react-native-modal'
import { Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const SearchLocationOption = ({ selected, label, onPress }) => (
  <TouchableOpacity style={styles.option} onPress={onPress}>
    <Ionicons
      style={styles.optionIcon}
      name={`md-radio-button-${selected ? 'on' : 'off'}`}
      size={22}
      color={selected ? '#2f353b' : 'grey'}
    />
    <Text
      style={selected ? styles.optionSelectedLabel : styles.optionLabel}
    >
      {label}
    </Text>
  </TouchableOpacity>
)

const SearchLocationModal = ({
  currentOption,
  onHideOptions,
  onOption,
  isVisible
}) => (
  <Modal
    style={styles.container}
    isVisible={isVisible}
    onBackdropPress={onHideOptions}
  >
    <View style={styles.modalContent}>
      <SearchLocationOption
        label='Nearby'
        onPress={() => onOption('nearby')}
        selected={currentOption === 'nearby'}
      />
      <SearchLocationOption
        label='By City'
        onPress={() => onOption('city')}
        selected={currentOption === 'city'}
      />

      <Button
        title='Close'
        onPress={onHideOptions}
        buttonStyle={{
          backgroundColor: 'lightgrey'
        }}
        titleStyle={{
          fontWeight: 'bold',
          fontSize: 16,
          color: '#2f353b'
        }}
      />
    </View>
  </Modal>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end'
  },
  modalContent: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12
  },
  optionIcon: {
    marginTop: 1,
    paddingLeft: 5,
    paddingRight: 8
  },
  optionSelectedLabel: {
    fontWeight: 'bold',
    color: '#2f353b'
  },
  optionLabel: {
    fontWeight: 'bold',
    color: 'grey'
  }
})

export default SearchLocationModal
