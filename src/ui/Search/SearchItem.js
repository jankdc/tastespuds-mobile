import React, { PureComponent } from 'react'
import { Badge } from 'react-native-elements'
import { ASSETS_URL } from 'react-native-dotenv'
import { StyleSheet, View, Text } from 'react-native'

import SearchItemImage from './SearchItemImage'
import SearchItemLikes from './SearchItemLikes'
import SearchItemPrice from './SearchItemPrice'
import SearchItemHeader from './SearchItemHeader'
import SearchItemRating from './SearchItemRating'

import { distDiffInKm } from '../../utils/math'

class SearchItem extends PureComponent {
  _renderBadge (value) {
    return (
      <Badge
        value={value}
        textStyle={{
          color: 'tomato',
          fontSize: 10
        }}
        containerStyle={{
          borderColor: 'tomato',
          borderWidth: 1,
          alignSelf: 'flex-start',
          backgroundColor: 'white'
        }}
      />
    )
  }

  _renderDistanceBadge () {
    if (!this.props.location) {
      return null
    }

    const distDiffUser = this.props.location && distDiffInKm(
      this.props.location.latitude,
      this.props.location.longitude,
      this.props.item.place.location[0],
      this.props.item.place.location[1]
    )

    const simplerValue = Math.round(distDiffUser.toFixed(2))

    if (simplerValue === 0) {
      return this._renderBadge('0.1km')
    }

    return this._renderBadge(`${simplerValue}km`)
  }

  render () {
    const { item, ranking } = this.props

    return (
      <View style={styles.container}>
        <SearchItemImage uri={`${ASSETS_URL}/${item.asset}`} />

        <View style={styles.content}>
          <SearchItemHeader name={item.name} ranking={ranking} />

          <Text style={styles.place}>
            {item.place && item.place.name}
          </Text>

          <View style={{ flexDirection: 'row', paddingVertical: 6 }}>
            { this._renderDistanceBadge() }
            { this._renderBadge(`${item.reviews} Review${item.reviews ? 's' : ''}`) }
          </View>

          <View style={styles.rowContent}>
            <SearchItemRating rating={item.rating} />
            <SearchItemLikes likes={item.likes} />
            <SearchItemPrice />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 120
  },
  content: {
    flex: 1,
    paddingTop: 12,
    paddingLeft: 12
  },
  place: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black'
  },
  rowContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default SearchItem
