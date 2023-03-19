import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function Buttom(props) {
    const { label } = props;
    return(
        <View style={styles.buttomContainer}>
            <Text style={styles.buttomLabel}>{ label }</Text>
        </View>
    );
} 

Buttom.propTypes = {
    label:string.isRequired,
};

const styles = StyleSheet.create({
    buttomContainer: {
        backgroundColor: '#467fd3',
        borderRadius: 4,
        marginBottom: 24,
        alignSelf: 'flex-start',
    },
    buttomLabel: {
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 32,
        paddingHorizontal: 32,
        paddingVertical: 8,
        fontWeight: 'bold',
    },
});