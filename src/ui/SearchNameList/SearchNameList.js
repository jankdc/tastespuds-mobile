import React from 'react'
import { FlatList } from 'react-native'

import SearchItem from './SearchItem'
import SearchEmptyItem from './SearchEmptyItem'

const SearchNameList = ({
  searchResults,
  onRegister,
  onSelect
}) => (
  <FlatList
    data={searchResults}
    renderItem={({ index, item }) =>
      <SearchItem
        item={item}
        onPress={() => onSelect(item, index)}
      />
    }
    keyExtractor={item => `${item.id}`}
    ListEmptyComponent={() =>
      <SearchEmptyItem onPress={onRegister} />
    }
    alwaysBounceVertical={false}
  />
)

export default SearchNameList
