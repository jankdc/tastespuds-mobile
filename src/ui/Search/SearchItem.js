import React from 'react'
import Image from 'react-native-image-progress'
import { Badge } from 'react-native-elements'
import { ASSETS_URL } from 'react-native-dotenv'
import { StyleSheet, View, Text } from 'react-native'

import SearchItemLikes from './SearchItemLikes'
import SearchItemPrice from './SearchItemPrice'
import SearchItemRating from './SearchItemRating'

const SearchItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={{
            uri: `${ASSETS_URL}/2a593015-4ba7-472a-84b2-1479db3587b3`
          }}

          style={{
            height: '100%',
            width: '100%'
          }}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>Ramen Noodles</Text>
        <Text style={styles.place}>Wagamama</Text>

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
            value={'116 Reviews'}
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

        <Text style={styles.ranking}>#1 of 965 items in Brighton</Text>

        <View style={styles.rowContent}>
          <SearchItemRating />
          <SearchItemLikes />
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
    height: 135
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
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  place: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'tomato'
  },
  ranking: {
    fontSize: 13,
    color: 'black'
  },
  rowContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default SearchItem
