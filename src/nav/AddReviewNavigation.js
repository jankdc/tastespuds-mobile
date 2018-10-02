import { createStackNavigator } from 'react-navigation'

import AddReview from '../ui/AddReview'

const AddReviewNavigation = createStackNavigator({
  AddReview: {
    screen: AddReview
  }
})

export default AddReviewNavigation
