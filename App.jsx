import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.appInner}>
          <Text style={styles.appTitle}>Memo App</Text>
          <Text style={styles.appRight}>ログアウト</Text>
        </View>
      </View>

      <View style={styles.memoList}>
       <View style={styles.memoListItem}>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2023年3月14日 10:00</Text>
        </View>
        
        <View>
          <Text style={styles.buttom}>X</Text>
        </View>
      </View>

      <View style={styles.memoList}>
       <View style={styles.memoListItem}>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2023年3月14日 10:00</Text>
        </View>
        
        <View>
          <Text style={styles.buttom}>X</Text>
        </View>
      </View>

      <View style={styles.memoList}>
       <View style={styles.memoListItem}>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2023年3月14日 10:00</Text>
        </View>
        
        <View>
          <Text style={styles.buttom}>X</Text>
        </View>
      </View>

      <View style={styles.memoList}>
       <View style={styles.memoListItem}>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2023年3月14日 10:00</Text>
        </View>
        
        <View>
          <Text style={styles.buttom}>X</Text>
        </View>
      </View>
      <View style={styles.circleButtom}>
        <Text style={styles.circleButtomLabel}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appbar: {
    backgroundColor: '#1BCAF0',
    width: '100%',
    height: 104,
    justifyContent: 'flex-end',
  },
  appInner: {
    alignItems : 'center',
  },
  appTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  appRight: {
    position: 'absolute',
    color: 'rgba(255, 255, 255, 0.8)',
    right: 19,
    bottom: 16,
  },
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

  circleButtom: {
    backgroundColor: '#1BCAF0',
    borderRadius: 40,
    width: 70,
    height: 70,
    position: 'absolute',
    right: 40,
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {width:0, heightt: 8},
    shadowOpacity: 0.25,
    ShadowRadious: 15,
    elevation: 15,
  },

  circleButtomLabel: {
    color: '#ffffff',
    fontSize: 50,
    lineHeight: 50,
  },
});

// npm install -g expo-cli@5.5.1
// expo --version
