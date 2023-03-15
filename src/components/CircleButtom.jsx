import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string, shape } from 'prop-types';

export default function CircleButtom(props) {
    const { children, style } = props;
    return (
        <View style={[styles.circleButtom, style]}>
            <Text style={styles.circleButtomLabel}>{ children }</Text>
        </View> 
    );
}

CircleButtom.propTypes = {
    children: string.isRequired,
    style: shape(),
}

CircleButtom.defaultProps = {
    style: null,
};

const styles = StyleSheet.create({
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