import { createStackNavigator } from 'react-navigation'
import { View } from 'react-native'

import Camera from '../ui/Camera'

const AddReviewNavigation = createStackNavigator({
  Camera: {
    screen: Camera
  },
  EditImage: {
    screen: View
  }
})

export default AddReviewNavigation
