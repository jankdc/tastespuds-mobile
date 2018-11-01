import React from 'react'

import {
  StyleSheet,
  FlatList,
  View
} from 'react-native'

import SearchMenu from './SearchMenu'
import SearchItem from './SearchItem'

const data = [
  {
    id: '123',
    name: 'Content'
  },
  {
    id: '124',
    name: 'Content'
  },
  {
    id: '125',
    name: 'Content'
  },
  {
    id: '126',
    name: 'Content'
  },
  {
    id: '127',
    name: 'Content'
  }
]

const ItemSeparator = () => (
  <View style={styles.separator} />
)

class Search extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <SearchMenu />

        <FlatList
          ItemSeparatorComponent={ItemSeparator}

          keyExtractor={(item) =>
            item.id
          }

          renderItem={({ item }) => (
            <SearchItem item={item} />
          )}

          style={styles.list}

          data={data}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  separator: {
    alignSelf: 'center',
    marginVertical: 5
  }
})

export default Search
