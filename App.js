import React from 'react';
import {LogBox, StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {theme} from "./theme";
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from "react-redux";
import NavigationContainerCustom from "./navigation/NavigationContainerCustom";
import generateStore from './redux/store';

const Stack = createStackNavigator();

LogBox.ignoreAllLogs(true);
const store = generateStore();

export default function App() {


    return (
        <Provider store={store}>
            <NativeBaseProvider theme={theme}>
                <NavigationContainerCustom/>
            </NativeBaseProvider>
        </Provider>
    );
}


const styles = StyleSheet.create({
    container: {}
});
