import React from 'react'
import { FlatList } from 'react-native'

import SearchItem from './SearchItem'

const SearchList = ({ searchResults }) => (
  <FlatList
    data={searchResults}
    renderItem={({ item }) => <SearchItem item={item} />}
    keyExtractor={item => item.id}
  />
)

export default SearchList
