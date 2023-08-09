import React, { useRef, useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SAMPLE_DATA } from './assets/data/sampleData'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import ListItem from './components/ListItem'
import Chart from './components/Chart'

const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
      <Text style={styles.largeTitle}>Markets</Text>
    </View>
    <View style={styles.divider} />
  </>
)

export default function App() {
  const [selectedCoinData, setSelectedCoinData] = useState(null)
  const bottomSheetModalRef = useRef(null)
  const snapPoints = useMemo(() => ['50%'], [])
  const openModal = (item) => {
    setSelectedCoinData(item)
    bottomSheetModalRef.current.present();
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <BottomSheetModalProvider>
        <SafeAreaView style={styles.container}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={SAMPLE_DATA}
            renderItem={({ item }) => (
              <ListItem
                name={item.name}
                symbol={item.symbol}
                currentPrice={item.current_price}
                priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
                logoUrl={item.image}
                onPress={() => openModal(item)}
              />
            )}
            ListHeaderComponent={<ListHeader />}
          />
        </SafeAreaView>
        <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}
      >
        { selectedCoinData ? (
          <Chart
            currentPrice={selectedCoinData.current_price}
            logoUrl={selectedCoinData.image}
            name={selectedCoinData.name}
            symbol={selectedCoinData.symbol}
            priceChangePercentage7d={selectedCoinData.price_change_percentage_7d_in_currency}
            sparkline={selectedCoinData?.sparkline_in_7d.price}
          />
        ) : null}
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  titleWrapper: {
    marginTop: '15%',
    paddingHorizontal: 16
  },
  divider: {
    height: 1.5,
    backgroundColor: 'gray',
    marginHorizontal: 16,
    marginTop: '4%'
  },
  bottomSheet: {
    backgroundColor: 'rgba(255, 255, 255,0)',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
});
