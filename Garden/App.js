import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/login';

export default function App() {
  return (
    <View style={styles.container}>
       <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#236c1a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});
