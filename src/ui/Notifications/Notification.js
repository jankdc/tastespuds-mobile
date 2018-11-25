import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Image from 'react-native-image-progress'
import ago from 's-ago'

class Notification extends Component {
  _renderActors () {
    const { actors } = this.props

    if (actors.length === 0) {
      return <Text style={styles.actors}>Someone</Text>
    }

    if (actors.length === 1) {
      return <Text style={styles.actors}>{ actors[0] }</Text>
    }

    if (actors.length === 2) {
      return <Text style={styles.actors}>{ actors[0] } and {actors.length - 1} other</Text>
    }

    if (actors.length > 2) {
      return <Text style={styles.actors}>{ actors[0] } and {actors.length - 1} others</Text>
    }
  }

  render () {
    const { iconUrl, verb, object, date } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={{ uri: iconUrl }}
            imageStyle={{ borderRadius: 20 }}
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            { this._renderActors() }
            <Text style={styles.verbObject}> { verb }s your { object.toLowerCase() }</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>
              { ago(new Date(date)) }
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  iconContainer: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  dateContainer: {
    marginTop: 5
  },
  date: {
    fontSize: 12,
    color: 'grey'
  },
  actors: {
    fontWeight: 'bold',
    fontSize: 14
  },
  icon: {
    height: 40,
    width: 40
  },
  verbObject: {
    fontSize: 14
  }
})

export default Notification
