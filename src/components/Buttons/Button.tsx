import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import * as Colors from '../../styles/Color';

interface ButtonProps {
    onPress: () => {};
    title: string;
    height?: number;
    width?: number;
}

const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    height = 50,
    width = 300,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[{ height: height, width: width }, styles.buttonStyle]}>
            <Text style={styles.textStyle}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: Colors.Blue,
        borderRadius: 15,
        alignContent: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});
