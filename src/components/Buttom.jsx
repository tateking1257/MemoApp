import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { string, func } from 'prop-types';

export default function Buttom(props) {
    const { label, onPress } = props;
    return(
        <TouchableOpacity style={styles.buttomContainer} onPress={onPress}>
            <Text style={styles.buttomLabel}>{ label }</Text>
        </TouchableOpacity>
    );
} 

Buttom.propTypes = {
    label:string.isRequired,
    onPress: func,
};

Buttom.defaultProps = {
    onPress: null,
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