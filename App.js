import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Markets</Text>
      </View>
      <View style={styles.divider}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  }
});
