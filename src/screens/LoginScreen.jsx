import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import Buttom from '../components/Buttom';

export default function LoginScreen() {
    return(
        <View style={styles.container}>
            <AppBar />
            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
                <TextInput style={styles.input} value="email" />
                <TextInput style={styles.input} value="pass" />
                <Buttom label='Submit'/>
                <View style={styles.footContainer}>
                    <Text style={styles.footText}>Not registered?</Text>
                    <Text style={styles.footLink}>Sign up here!</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f8f4f8'
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 32,
        marginBottom: 24,
    },
    input: {
        fontSize: 16,
        height: 48,
        borderColor: '#dddddd',
        borderweight: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    footContainer: {
        flexDirection: 'row',
    },
    footText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
    },
    footLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467fd3',
    },
});