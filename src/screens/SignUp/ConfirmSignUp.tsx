import React from 'react';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView, StyleSheet, View, StatusBar, Text } from 'react-native';

import * as AppColors from '../../styles/Color';

import Button from '../../components/Buttons/Button';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const ConfirmSignUp = () => {
    return (
        <React.Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.sectionContainer}>
                    <View style={styles.headerContainer}>
                        <Header title="Finish Signing Up" />

                        <Text style={styles.termsStyle}>
                            By tapping Sign Up, you agree to our{' '}
                            <Text style={styles.linkTextStyle}>
                                Terms & Conditions
                            </Text>{' '}
                            and{' '}
                            <Text style={styles.linkTextStyle}>
                                Privacy Policy
                            </Text>
                            .
                        </Text>

                        <View style={styles.buttonContainerStyle}>
                            <Button
                                onPress={() => {
                                    return {};
                                }}
                                title="Continue"
                            />
                        </View>
                    </View>
                    <Footer />
                </View>
            </SafeAreaView>
        </React.Fragment>
    );
};

export default ConfirmSignUp;

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
    buttonContainerStyle: {
        alignSelf: 'center',
    },
    termsStyle: {
        color: AppColors.Grey,
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
    },
    linkTextStyle: {
        color: AppColors.Blue,
        marginHorizontal: 5,
    },
});
