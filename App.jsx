import React, { Children } from 'react';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailsScreen from './src/screens/MemoDetailsScreen';
import MemoEditScreen from './src/screens/MemoEditScreen ';
import MemoCreateScreen from './src/screens/MemoCreateScreen';

export default function App() {
  return (
    <MemoCreateScreen />
  );
}

// npm install -g expo-cli@5.5.1
// expo --version

// https://icons.expo.fyi/
