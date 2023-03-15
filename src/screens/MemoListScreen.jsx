import React from "react";
import { StyleSheet, View } from "react-native";
import AppBar from '../components/AppBar';
import MemoItem from '../components/MemoItem';
import CircleButtom from '../components/CircleButtom';

export default function MemoListScreen(){
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
