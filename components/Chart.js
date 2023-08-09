import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Chart = (currentPrice, logoUrl, name, priceChangePercentage7d, sparkline) => {
  return (
    <View style={styles.chartWrapper}>
        <View style={styles.titleWrapper}>
            <View style={styles.upperTitles}>
                <View styles={styles.upperLeftTitles}>
                    <Image></Image>
                </View>
            </View>
        </View>
    </View>
  )
}

export default Chart

const styles = StyleSheet.create({})