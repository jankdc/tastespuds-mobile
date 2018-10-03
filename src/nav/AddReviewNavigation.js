import { createStackNavigator } from 'react-navigation'

import Camera from '../ui/Camera'

const AddReviewNavigation = createStackNavigator({
  Camera: {
    screen: Camera
  }
})

export default AddReviewNavigation
