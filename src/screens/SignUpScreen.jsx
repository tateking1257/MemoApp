import React from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';

import Buttom from '../components/Buttom';
import Info from '../components/Info';

export default function SignUpScreen(props) {
    const { navigation } = props;
    return(
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Sign up</Text>
                <Info />
                <Buttom 
                    label='Submit' 
                    onPress={()=>{
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'MemoList'}],
                        });
                    }}
                />
                <View style={styles.footContainer}>
                    <Text style={styles.footText}>Already registered?</Text>
                    <TouchableOpacity
                        onPress={()=>{
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Login'}],
                            });
                        }}
                    >
                        <Text style={styles.footLink}>Log In</Text>
                    </TouchableOpacity>
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