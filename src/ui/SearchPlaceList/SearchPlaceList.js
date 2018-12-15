import React from 'react'
import { FlatList } from 'react-native'

import SearchItem from './SearchItem'
import SearchEmptyItem from './SearchEmptyItem'

const SearchList = ({ searchResults, onSelect, onRegister, disableRegister }) => (
  <FlatList
    data={searchResults}
    renderItem={({ index, item }) =>
      <SearchItem
        item={item}
        onPress={() => onSelect(item, index)}
      />
    }
    keyExtractor={item => `${item.address_id}`}
    ListEmptyComponent={() =>
      <SearchEmptyItem
        onPress={onRegister}
        disabled={disableRegister}
      />
    }
    alwaysBounceVertical={false}
  />
)

export default SearchList
