import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const ListItem = ({name, symbol, currentPrice, priceChangePercentage7d, logoUrl  }) => {
  const priceChangeColor = priceChangePercentage7d > 0 ? 'green' : 'red';

  return (
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        {/* Left side */}
        <View style={styles.leftWrapper}>
          <Image source={{ uri: logoUrl}} style={styles.image} />
          <View style={styles.titlesWrapper}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
          </View>
        </View>

        {/* Right side */}
        <View style={styles.rightWrapper}>
          <Text style={styles.title}>${currentPrice.toLocaleString('en-usd', {currency: 'usd'})}</Text>
          <Text style={[styles.subtitle, { color: 'red' }]}>{priceChangePercentage7d.toFixed(2)}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ListItem

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    height: 48,
    width: 48
  },
  leftWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titlesWrapper: {
    marginLeft: '6%'
  },
  rightWrapper: {
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 18
  },
  subtitle: {
    marginTop: '4%',
    fontSize: 14,
    color: 'grey'
  },
})