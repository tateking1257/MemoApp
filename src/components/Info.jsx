import React,{ useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function Info(){
    const [email, setEmail] = useState('');
    const [passward, setPassward] = useState('');
    return(
        <View>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={(text)=>{ setEmail(text); }}
                autoCapitalize="none"
                keyboardType='email-address'
                placeholder='Email Address'
                textContentType='emailAddress'
            />
            <TextInput
                style={styles.input}
                value={passward}
                onChangeText={(text)=>{ setPassward(text); }}
                autoCapitalize="none"
                placeholder='Passward'
                secureTextEntry
                textContentType='password'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        height: 48,
        borderColor: '#dddddd',
        borderweight: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 8,
        marginBottom: 16,
    },
});