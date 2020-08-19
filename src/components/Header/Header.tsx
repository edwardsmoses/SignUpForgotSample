import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Colors from '../../styles/Color';

interface HeaderProps {
    title: string;
}

const Footer: React.FC<HeaderProps> = ({ title }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.headerStyle}>{title}</Text>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    containerStyle: {
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    headerStyle: {
        color: Colors.Blue,
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
    },
});
