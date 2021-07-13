import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeBaseProvider, Box, Text} from 'native-base';
import {theme} from "./proyect/theme";

export default function App() {
    return (
        <NativeBaseProvider theme={theme}>
            <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
                <Text color={'amber.400'}>Open up App.js to start working on your app!</Text>
            </Box>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {}
});
