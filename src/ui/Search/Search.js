import React from 'react'

import {
  StyleSheet,
  FlatList,
  View
} from 'react-native'

import SearchMenu from './SearchMenu'
import SearchItem from './SearchItem'

const ItemSeparator = () => (
  <View style={styles.separator} />
)

class Search extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      query: {
        sort: 'top',
        city: 'Brighton'
      }
    }
  }

  componentDidMount () {
    this.props.onFocus(this.state.query)
  }

  render () {
    return (
      <View style={styles.container}>
        <SearchMenu />

        <FlatList
          ItemSeparatorComponent={ItemSeparator}

          keyExtractor={(item) =>
            `${item.id}`
          }

          renderItem={({ item, index }) => (
            <SearchItem item={item} ranking={index + 1} />
          )}

          style={styles.list}

          data={this.props.items}
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
