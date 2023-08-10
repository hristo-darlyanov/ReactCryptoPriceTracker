import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-wagmi-charts';

const Chart = ({currentPrice, logoUrl, name, symbol, priceChangePercentage7d, sparkline}) => {
    const priceChangeColor = priceChangePercentage7d > 0 ? 'green' : 'red';

    const data = [
        {
          timestamp: 1625945400000,
          value: 33575.25,
        },
        {
          timestamp: 1625946300000,
          value: 33545.25,
        },
        {
          timestamp: 1625947200000,
          value: 33510.25,
        },
        {
          timestamp: 1625948100000,
          value: 33215.25,
        },
      ];

  return (
    <LineChart.Provider data={data}>
    <View style={styles.chartWrapper}>
        <View style={styles.titlesWrapper}>
            <View style={styles.upperTitles}>
                <View style={styles.upperLeftTitle}>
                    <Image source={{uri: logoUrl}} style={styles.image}/>
                    <Text style={styles.subtitle}>{name} ({symbol.toUpperCase()})</Text>
                </View>
                <Text style={styles.subtitle}>7d</Text>
            </View>
            <View style={styles.lowerTitles}>
                <Text style={styles.boldTitle}>${currentPrice.toLocaleString('en-usd', {currency: 'usd'})}</Text>
                <Text style={[styles.titles, {color : priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
            </View>
        </View>
        <LineChart>
            <LineChart.Path />
        </LineChart>
    </View>
    </LineChart.Provider>
  )
}

export default Chart

const styles = StyleSheet.create({
    chartWrapper: {
        margin:16
    },
    titlesWrapper: {

    },
    upperTitles: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    upperLeftTitle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 24,
        height: 24,
        marginRight: 4
    },
    subtitle: {
        fontSize: 14,
        color: 'gray'
    },
    lowerTitles: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    boldTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 18
    }
})