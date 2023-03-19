import React, { Children } from 'react';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailsScreen from './src/screens/MemoDetailsScreen';
import MemoEditScreen from './src/screens/MemoEditScreen ';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

export default function App() {
  return (
    <MemoListScreen />
  );
}

// npm install -g expo-cli@5.5.1
// expo --version

// https://icons.expo.fyi/
