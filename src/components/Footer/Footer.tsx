import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import * as Colors from '../../styles/Color';

interface FooterProps {
    onPress?: () => {};
    content?: string;
}

const Footer: React.FC<FooterProps> = ({
    content = 'Already have an account? Sign In',
    onPress,
}) => {
    return (
        <View style={styles.containerStyle}>
            <View style={styles.dividerStyle} />
            <TouchableOpacity onPress={onPress} style={styles.footerStyle}>
                <Text style={styles.textStyle}>{content}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    containerStyle: {
        alignContent: 'center',
        justifyContent: 'center',
    },
    dividerStyle: {
        borderTopColor: Colors.Blue,
        borderTopWidth: StyleSheet.hairlineWidth,
        marginBottom: 15,
        marginTop: 10,
        alignSelf: 'stretch',
    },
    footerStyle: {
        alignContent: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: Colors.Blue,
        fontSize: 20,
        textAlign: 'center',
    },
});
