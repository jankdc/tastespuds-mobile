import React, { Component } from 'react'

import {
  ActivityIndicator,
  StyleSheet,
  FlatList,
  View
} from 'react-native'
import { Divider } from 'react-native-elements'

import Notification from './Notification'

class Notifications extends Component {
  constructor (props) {
    super(props)

    this._onPress = this._onPress.bind(this)
  }

  componentDidMount () {
    this.props.onFocus()
  }

  _onPress (type, id) {
    if (type === 'Review') {
      this.props.navigation.navigate('SingleReview', {
        reviewId: id
      })
    }
  }

  render () {
    const { isLoading, notifications } = this.props

    if (isLoading && notifications === null) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          ItemSeparatorComponent={Divider}
          data={notifications}
          onRefresh={this.props.onRefresh}
          refreshing={isLoading}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Notification
              onPress={this._onPress}
              iconUrl={item.activities[0].icon_url}
              object={item.activities[0].object}
              actors={item.activities.map(a => a.actor)}
              verb={item.verb}
              date={item.updated_at}
              id={item.object_id}
            />
          )}
        />
      </View>
    )
  }
}

Notifications.navigationOptions = {
  title: 'Notifications'
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Notifications
