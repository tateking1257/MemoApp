import React from "react";
import { View, StyleSheet, TextInput,KeyboardAvoidingView, Alert } from "react-native";

import CircleButtom from "../components/CircleButtom";

export default function MemoEditScreen(props){
    const { navigation } = props;
    return (
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <View style={styles.inputContainer}>
                <TextInput value="買い物" multiline style={styles.inputText} />
            </View >
            <CircleButtom name="check" 
            onPress={()=> { navigation.goBack(); }}
            // onPress={()=> { Alert.alert('Pressed!');} }
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