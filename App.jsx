import React, { Children } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from './src/components/AppBar';
import MemoItem from './src/components/MemoItem';
import CircleButtom from './src/components/CircleButtom';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoItem />
      <CircleButtom>+</CircleButtom>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

// npm install -g expo-cli@5.5.1
// expo --version
