import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppBar() {
    return (
        <View style={styles.appbar}>
          <View style={styles.appInner}>
            <Text style={styles.appTitle}>Memo App</Text>
            <Text style={styles.appRight}>ログアウト</Text>
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
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
});

  