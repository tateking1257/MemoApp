import React from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';

import AppBar from '../components/AppBar';
import CircleButtom from '../components/CircleButtom';


export default function MemoCreateScreen() {
    return(
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <AppBar />
            <View style={styles.inputContainer}>
                <TextInput value="" multiline style={styles.inputText} />
            </View >
            <CircleButtom name="check" />
        </KeyboardAvoidingView>
    );
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    inputContainer: {
        paddingHorizontal: 32,
        paddingVertical: 27,   
        flex: 1, 
    },
    inputText: {
        flex: 1, 
        fontSize: 16,
        lineHeight: 24,
    },
  });
