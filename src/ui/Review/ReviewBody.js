import React from 'react'
import FullWidthImage from '../FullWidthImage'
import { ASSETS_URL } from 'react-native-dotenv'

class ReviewBody extends React.Component {
  render () {
    const [imageInfo] = this.props.review.assets

    const width = parseInt(imageInfo.options.width, 10)
    const height = parseInt(imageInfo.options.height, 10)

    return (
      <FullWidthImage
        size={{ width: width, height: height }}
        source={{ uri: `${ASSETS_URL}/${imageInfo.id}` }}
      />
    )
  }
}

export default ReviewBody
