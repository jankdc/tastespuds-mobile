import React, { PureComponent } from 'react'
import { StyleSheet, View, Text } from 'react-native'

class SearchItemHeader extends PureComponent {
  render () {
    const { name, ranking } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode='tail'>{name}</Text>

        <View style={styles.rankingContainer}>
          <Text style={styles.ranking}>{ranking}.</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    height: '100%',
    width: '100%'
  },
  rankingContainer: {
    marginRight: 10
  },
  ranking: {
    fontSize: 12,
    fontWeight: 'bold'
  }
})

export default SearchItemHeader
