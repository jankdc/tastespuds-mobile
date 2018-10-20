import React from 'react'

import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

const applyStyleIfDisabled = (disabled) => {
  if (!disabled) {
    return {}
  }

  return {
    backgroundColor: 'grey',
    opacity: 0.8
  }
}

const AddReviewButton = (props) => (
  <TouchableOpacity
    {...props}
    style={[
      props.style,
      styles.container,
      applyStyleIfDisabled(props.disabled && !props.loading)
    ]}
  >
    {
      props.loading
        ? <ActivityIndicator size='small' style={styles.loading} color='white' />
        : <Text style={styles.text}>Share</Text>
    }
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    paddingVertical: 20,
    width: '100%'
  },
  loading: {
    marginLeft: 5
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default AddReviewButton
