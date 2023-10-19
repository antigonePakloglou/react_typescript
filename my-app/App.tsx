import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import RotatedSquare from './src/components/RotatedSquare';
import DoubleSquare from './src/components/DoubleSquare';
import Textes from './src/components/Textes';
import Card from './src/components/Card';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
      <Text>Exercices après-midi </Text>
      <View style={styles.marge}>
        <RotatedSquare />
      </View>
      <View style={styles.marge}>
        <DoubleSquare />
      </View>

      <View style={styles.marge}>
        <Textes />
      </View>
      
      <View style={styles.marge}>
        <Card />
      </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8FF9AE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marge: {
    marginTop: 50
  }
});
