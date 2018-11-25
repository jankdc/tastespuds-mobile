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
  componentDidMount () {
    this.props.onFocus()
  }

  render () {
    const { isLoading, notifications } = this.props

    if (isLoading || notifications === null) {
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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Notification
              iconUrl={item.activities[0].icon_url}
              object={item.activities[0].object}
              actors={item.activities.map(a => a.actor)}
              verb={item.verb}
              date={item.updated_at}
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
