import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-wagmi-charts';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Chart = ({currentPrice, logoUrl, name, symbol, priceChangePercentage7d, sparkline}) => {
    const priceChangeColor = priceChangePercentage7d > 0 ? 'green' : 'red';

    const formatUSD = value => {
        'worklet';
        if (value === ''){
            const formattedValue =`${parseFloat(currentPrice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
            return `$${formattedValue.toLocaleString('en-usd', { currency: 'usd' })}`
        }
        
        const formattedValue =`${parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
        return `$${formattedValue.toLocaleString('en-usd', { currency: 'usd' })}`
    }

    const data = [
        {
          "x": 0,
          "value": 33575,
        },
        {
          "x": 0,
          "value": 33545,
        },
        {
          "x": 0,
          "value": 33510,
        },
        {
          "x": 0,
          "value": 33215,
        },
      ];

    return (
        <LineChart.Provider data={sparkline}>
            <View style={styles.chartWrapper}>
                <View style={styles.titlesWrapper}>
                    <View style={styles.upperTitles}>
                        <View style={styles.upperLeftTitle}>
                            <Image source={{ uri: logoUrl }} style={styles.image} />
                            <Text style={styles.subtitle}>{name} ({symbol.toUpperCase()})</Text>
                        </View>
                        <Text style={styles.subtitle}>7d</Text>
                    </View>
                    <View style={styles.lowerTitles}>
                        <LineChart.PriceText
                            format={({ value }) => {
                                'worklet';
                                const formattedPrice = formatUSD(value);
                                return `${formattedPrice}`;
                            }}
                            style={styles.boldTitle}
                        />
                        {/* <Text style={styles.boldTitle}>${currentPrice.toLocaleString('en-usd', { currency: 'usd' })}</Text> */}
                        <Text style={[styles.titles, { color: priceChangeColor }]}>{priceChangePercentage7d.toFixed(2)}%</Text>
                    </View>
                </View>
                <View style={styles.chartLineWrapper}>
                    <LineChart height={windowHeight / 4}>
                        <LineChart.Path />
                        <LineChart.CursorCrosshair>
                            <LineChart.Tooltip />
                        </LineChart.CursorCrosshair>
                    </LineChart>
                </View>
            </View>
        </LineChart.Provider>
  )
}

export default Chart

const styles = StyleSheet.create({
    chartWrapper: {
        marginVertical:16,
    },
    titlesWrapper: {
        marginHorizontal: 16
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
    },
    chartLineWrapper: {
        marginTop: 40,
    }
})