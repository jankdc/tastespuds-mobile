import { createStackNavigator } from 'react-navigation'

import AddReviewPlace from '../ui/AddReviewPlace'
import AddNewPlace from '../ui/AddNewPlace'

const AddReviewPlaceNavigation = createStackNavigator({
  AddReviewPlace: {
    screen: AddReviewPlace
  },
  AddNewPlace: {
    screen: AddNewPlace
  }
})

AddReviewPlaceNavigation.navigationOptions = {
  header: null
}

export default AddReviewPlaceNavigation
