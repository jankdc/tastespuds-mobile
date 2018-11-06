import React from 'react'
import Image from 'react-native-image-progress'
import { Badge } from 'react-native-elements'
import { ASSETS_URL } from 'react-native-dotenv'
import { StyleSheet, View, Text } from 'react-native'

import SearchItemLikes from './SearchItemLikes'
import SearchItemPrice from './SearchItemPrice'
import SearchItemRating from './SearchItemRating'

const SearchItem = ({ item, ranking }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={{
            uri: `${ASSETS_URL}/${item.asset}`
          }}

          style={{
            height: '100%',
            width: '100%'
          }}
        />
      </View>
      <View style={styles.content}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.rankingContainer}>
            <Text style={styles.ranking}>{ranking + 1}.</Text>
          </View>
        </View>

        <Text style={styles.place}>{item.place && item.place.name}</Text>

        <View style={{ flexDirection: 'row', paddingVertical: 6 }}>
          <Badge
            value={'0.6km'}
            textStyle={{
              color: 'white',
              fontSize: 10
            }}
            containerStyle={{
              backgroundColor: 'grey',
              alignSelf: 'flex-start'
            }}
          />

          <Badge
            value={`${item.reviews} Review${item.reviews.length > 1 ? 's' : ''}`}
            textStyle={{
              color: 'white',
              fontSize: 10
            }}
            containerStyle={{
              backgroundColor: 'grey',
              alignSelf: 'flex-start'
            }}
          />
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 120
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100
  },
  content: {
    flex: 1,
    paddingTop: 12,
    paddingLeft: 12
  },
  rankingContainer: {
    marginRight: 10
  },
  ranking: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  place: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'tomato'
  },
  rowContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default SearchItem
