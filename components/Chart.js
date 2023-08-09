import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {ChartDot, ChartPath, ChartPathProvider, monotoneCubicInterpolation} from '@rainbow-me/animated-charts';

const Chart = ({currentPrice, logoUrl, name, symbol, priceChangePercentage7d, sparkline}) => {
    const priceChangeColor = priceChangePercentage7d > 0 ? 'green' : 'red';

  return (
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
    </View>
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