import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import * as Colors from '../../styles/Color';

interface RoundedButtonProps {
    onPress: () => {};
    children: React.ReactNode;
    size?: number;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
    children,
    onPress,
    size = 50,
}) => {
    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                style={[{ height: size, width: size }, styles.buttonStyle]}>
                {children}
            </TouchableOpacity>
        </View>
    );
};

export default RoundedButton;

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: Colors.Blue,
        borderRadius: 50,
        alignContent: 'center',
        justifyContent: 'center',
    },
});
