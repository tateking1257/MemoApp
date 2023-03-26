import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MemoItem() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

        <TouchableOpacity 
          style={styles.memoList}
          onPress={()=>{navigation.navigate('MemoDetails');}}
        >
         <View style={styles.memoListItem}>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2023年3月14日 10:00</Text>
          </View>
          
          <TouchableOpacity 
            style={styles.buttom}
            onPress={()=> {Alert.alert('Are you sure?');}}
          >
            <Entypo name="cross" size={24} color="#b0b0b0" />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.memoList}
          onPress={()=>{navigation.navigate('MemoDetails');}}
        >
         <View style={styles.memoListItem}>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2023年3月14日 10:00</Text>
          </View>
          
          <TouchableOpacity 
            style={styles.buttom}
            onPress={()=> {Alert.alert('Are you sure?');}}
          >
            <Entypo name="cross" size={24} color="#b0b0b0" />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.memoList}
          onPress={()=>{navigation.navigate('MemoDetails');}}
        >
         <View style={styles.memoListItem}>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2023年3月14日 10:00</Text>
          </View>
          
          <TouchableOpacity 
            style={styles.buttom}
            onPress={()=> {Alert.alert('Are you sure?');}}
          >
            <Entypo name="cross" size={24} color="#b0b0b0" />
          </TouchableOpacity>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  memoList: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  memoListItem: {
    paddingHorizontal: 19,
    paddingVertical: 16,
  },
  memoListItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    color: '#5C5858',
    lineHeight: 16,
  },
  buttom: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 22,
  },
});