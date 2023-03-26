import React from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';

import CircleButtom from '../components/CircleButtom';


export default function MemoCreateScreen(props) {
    const { navigation } = props;
    return(
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <View style={styles.inputContainer}>
                <TextInput value="" multiline style={styles.inputText} />
            </View >
            <CircleButtom 
            name="check"
            onPress={()=> { navigation.goBack(); }}
            />
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
