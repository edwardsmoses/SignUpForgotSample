import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import * as Colors from '../../styles/Color';

interface InputProps {
    placeholder: string;
    value: string;
    autoFocus: boolean;
    isPasswordEntry: boolean;
}

const Input: React.FC<InputProps> = ({
    placeholder,
    value,
    autoFocus,
    isPasswordEntry,
}) => {
    return (
        <View>
            <TextInput
                placeholder={placeholder}
                autoCapitalize="none"
                autoFocus={autoFocus || false}
                secureTextEntry={isPasswordEntry || false}
                style={styles.textInputStyle}
                value={value}
            />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    textInputStyle: {
        borderBottomWidth: 1,
        borderWidth: 1,
        borderColor: Colors.Grey,
        marginVertical: 10,
        borderRadius: 5,
    },
});
