import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CreateBill from './Screen/CreateBill';
import HomeScreen from './Screen/HomeScreen';

export default function App() {
  return (
    <CreateBill />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
