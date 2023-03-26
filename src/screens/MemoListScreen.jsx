import React from "react";
import { StyleSheet, View } from "react-native";

import MemoItem from '../components/MemoItem';
import CircleButtom from '../components/CircleButtom';

export default function MemoListScreen(props){
    const { navigation } = props;
    return (
        <View style={styles.container}>
          <MemoItem />
          <CircleButtom 
          name="plus"
          onPress={()=> {navigation.navigate('MemoCreate');}}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
