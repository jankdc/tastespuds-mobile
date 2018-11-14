import React from 'react'
import { FlatList } from 'react-native'

import SearchItem from './SearchItem'
import SearchEmptyItem from './SearchEmptyItem'

const SearchNameList = ({
  disableRegister,
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
      <SearchEmptyItem
        onPress={onRegister}
        disabled={disableRegister}
      />
    }
    alwaysBounceVertical={false}
  />
)

export default SearchNameList
