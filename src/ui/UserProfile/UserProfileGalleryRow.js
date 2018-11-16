import React, { PureComponent } from 'react'
import Image from 'react-native-image-progress'

import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import { ASSETS_URL } from 'react-native-dotenv'

class UserProfileGalleryRow extends PureComponent {
  render () {
    const { columns, size } = this.props

    return (
      <View style={styles.container}>
        {
          columns.map((review, index) =>
            <TouchableOpacity
              key={review.id}
              style={{
                paddingRight: index !== columns.length - 1 ? 1 : 0,
                width: size,
                height: size,
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onPress={() => this.props.onPress(review)}
            >
              <Image
                source={{ uri: `${ASSETS_URL}/${review.assets[0]}` }}
                resizeMode='cover'
                style={{
                  width: '100%',
                  height: '100%'
                }}
              />
            </TouchableOpacity>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})

export default UserProfileGalleryRow
