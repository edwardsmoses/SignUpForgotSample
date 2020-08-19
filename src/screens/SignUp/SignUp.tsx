import React from 'react';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView, StyleSheet, View, StatusBar, Text } from 'react-native';

import * as AppColors from '../../styles/Color';

import Input from '../../components/Inputs/Input';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import RoundedButton from '../../components/Buttons/RoundedButton';

const SignUpScreen = () => {
    return (
        <React.Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.sectionContainer}>
                    <View style={styles.headerContainer}>
                        <Header title="Create a Password" />
                        <View>
                            <Input
                                placeholder="Password"
                                value=""
                                autoFocus={true}
                                isPasswordEntry={true}
                            />
                            <Text style={styles.infoMessage}>
                                Enter a combination of at least six numbers,
                                letters and punctuation marks (like !and &).
                            </Text>
                            <Input
                                placeholder="Confirm Password"
                                value=""
                                autoFocus={false}
                                isPasswordEntry={true}
                            />
                        </View>
                    </View>
                    <View>
                        <View style={styles.roundedButtonContainer}>
                            <RoundedButton
                                onPress={() => {
                                    return {};
                                }}
                                children={
                                    <Text style={styles.buttonIconStyle}>
                                        {' '}
                                        {'>'}
                                    </Text>
                                }
                            />
                        </View>
                        <Footer />
                    </View>
                </View>
            </SafeAreaView>
        </React.Fragment>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        flexDirection: 'column',
    },
    sectionContainer: {
        backgroundColor: Colors.white,
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 40,
        flex: 1,
        flexDirection: 'column',
    },
    headerContainer: {
        marginTop: 30,
    },
    infoMessage: {
        color: AppColors.Grey,
        textAlign: 'center',
        fontSize: 15,
        marginVertical: 10,
    },
    roundedButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        marginHorizontal: 30,
        margin: 50,
    },
    buttonIconStyle: {
        color: AppColors.White,
        fontSize: 30,
        textAlign: 'center',
    },
});
