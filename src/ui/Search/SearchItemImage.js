import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import Image from 'react-native-image-progress'

class SearchItemImage extends PureComponent {
  render () {
    const { uri, imageStyle } = this.props

    return (
      <View style={styles.container}>
        <Image
          source={{ uri }}
          style={[ styles.image, imageStyle ]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100
  },
  image: {
    height: '100%',
    width: '100%'
  }
})

export default SearchItemImage
