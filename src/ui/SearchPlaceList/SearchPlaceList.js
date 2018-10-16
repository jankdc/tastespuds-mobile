import React from 'react'
import { FlatList } from 'react-native'

import SearchItem from './SearchItem'
import SearchEmptyItem from './SearchEmptyItem'

const SearchList = ({ searchResults, onSelect }) => (
  <FlatList
    data={searchResults}
    renderItem={({ index, item }) =>
      <SearchItem
        item={item}
        onPress={() => onSelect(item, index)}
      />
    }
    keyExtractor={item => `${item.id}`}
    ListEmptyComponent={SearchEmptyItem}
    alwaysBounceVertical={false}
  />
)

export default SearchList
