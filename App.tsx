/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AppRoutes } from './src/routes/index';
import SignUpScreen from './src/screens/SignUp/SignUp';
import SignUpConfirmScreen from './src/screens/SignUp/ConfirmSignUp';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={AppRoutes.SignUp}
                headerMode="none">
                <Stack.Screen
                    name={AppRoutes.SignUp}
                    component={SignUpScreen}
                />

                <Stack.Screen
                    name={AppRoutes.SignUpConfirm}
                    component={SignUpConfirmScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
